function strstr(haystack, needle, bool) {
    // Finds first occurrence of a string within another
    //
    // version: 1103.1210
    // discuss at: http://phpjs.org/functions/strstr    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strstr(‘Kevin van Zonneveld’, ‘van’);
    // *     returns 1: ‘van Zonneveld’    // *     example 2: strstr(‘Kevin van Zonneveld’, ‘van’, true);
    // *     returns 2: ‘Kevin ‘
    // *     example 3: strstr(‘name@example.com’, ‘@’);
    // *     returns 3: ‘@example.com’
    // *     example 4: strstr(‘name@example.com’, ‘@’, true);    // *     returns 4: ‘name’
    var pos = 0;

    haystack += "";
    pos = haystack.indexOf(needle); if (pos == -1) {
        return '';
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}

function strbetween(haystack, needle, needle2) {
	return strstr(strstr(haystack, needle).substr(needle.length), needle2, true);
}

function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function parseQuery(variable) {
    var query = variable,
		vars = query.split('&'),
		ret = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
	return ret;
}


function youtube_url_to_id(url){
    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[1].length==11){
        return match[1];
    }else{
        return false;
    }
}

window.addEventListener('message', function(event) {
	if (event.data.action == 'vimeoParseConfig') {
		console.log(event.data);
	}
});


jQuery(function($) {
	var results = $('#search-results'),
		searchform = $('#search-form'),
		searchinput = $('#search-input'),
		url = '',
		urldata = {},
		match = [],
		sandbox = $('#sandbox')[0];
	searchinput.focus();
	searchform.submit(function() {
		var s = searchinput.val();
		if ($.trim(s).substr(0,3) == 'www') // fix urls
			s = 'http://'+s;
		results.html('Loading . . .');
		if (match = s.match(/^(http|https):\/\/www.pornhub.com\/view_video\.php\?viewkey\=(\d*)/i)) {
			$.get('http://www.pornhub.com/view_video.php?viewkey='+match[2]).success(function(data) {
				results.html('');
				data = decodeURIComponent(strbetween(data, 'var flashvars =', 'var embedSWF'));
				data = data.replace(/[\s\;]+$/g, '');
				try {
					data = JSON.parse(data);
				} catch(e) { 
					// show error
					return false;
				}
				if (data.encrypted) {
					var key = data.video_title.split('+');
					key = key.join(' ');
					GibberishAES.size(256); 
					try {
						var decrypted = GibberishAES.dec(data.video_url, key);
					} catch(e) {
						results.html('Couldn\'t get video url :(');
						console.log('Error', e);
						return false;
					}
					results.html(decrypted);
				}
			}).error(function(data) {
				results.html('Connection error. Please try again later');
			});
		} else if (match = s.match(/vimeo\.com\/(\d*)/)) {
			$.get('http://vimeo.com/'+match[1]).success(function(data) {
				var config = strbetween(data, 'clip'+match[1]+'_', '};')+'}';
				config = config.match(/^(\d*) \= ([\s\S]*)/m);
				sandbox.contentWindow.postMessage({
					'action': 'vimeoParseConfig',
					'config': config[2]
				}, '*');				
			});
		
		} else if ((youtubeid = youtube_url_to_id(s)) !== false) {
			// = youtube id
			$.get('https://www.youtube.com/watch?v='+youtubeid+'&html5=0').success(function(data) {
				var title = $.trim(strbetween(data, '<title>', '</title>')),
					h = strbetween(data, "\"url_encoded_fmt_stream_map\":\"", "\"");
				console.log(title, youtubeid);
				if (h) {
					h = h.split(',');
					results.html('<h2>'+title+'</h2>');
					for(var a = 0; a < h.length; a++) {
						// parse urls
						url = h[a].split('\\u0026');
						urldata = {};
						for (var b = 0; b < url.length; b++) {
							url[b] = url[b].split('=');
							urldata[url[b][0]] = url[b][1];
						}
						console.log(urldata);
						//var cpn = getPlaybackNonce2({ video_id: youtubeid });

						url = decodeURIComponent(urldata.url);// + '&signature='+(urldata.s)+'&cpn='+cpn+'&range=0-65535&keepalive=yes';
						urldata.type = decodeURIComponent(urldata.type).replace(/\+/g, ' ').split(';');
						switch(urldata.type[0]) {
							case 'video/x-flv': urldata.type[0] = 'flv'; break;
							case 'video/webm': urldata.type[0] = 'webm'; break;
							case 'video/mp4': urldata.type[0] = 'mp4'; break;
							case 'video/3gpp': urldata.type[0] = '3gpp'; break;
							default: urldata.type[0] = 'mp4'; break;
						}
						results.append(url);
						results.append('<div class="result"><a download="'+title+'.'+urldata.type[0]+'" href="'+url+'"><strong>Download</strong> '+urldata.quality.toUpperCase()+' .'+urldata.type[0].toUpperCase() +'</a></div>');
					}
					
				} else {
					results.html('Couldn\'t load video');
				}
			}).error(function(data) {
				results.html('Connection error. Please try again later');
			});
		} else {
			// try audio search
			$.get('http://vk.com/search', { 'c[q]': s, 'c[section]': 'audio' }).success(function(data) {
				results.html('');
				data = $(data);
				var url='', title='', duration='';
				data.find('#results_wrap .audio').each(function() {
					url = $(this).find('input[type=hidden]').val().split(',')[0];
					title = $.trim($(this).find('.title_wrap:first').text());
					duration = $(this).find('.duration').text();
					results.append('<div class="result"><a download="'+title+'.mp3" href="'+url+'"><strong>Download</strong> '+title+'</a> '+duration+'</div>');
				});
				data.remove();
				if (!url)
					results.html('Nothing found. Try again');
			}).error(function() {
				results.html('Connection error. Please try again later');
			});
		}
		return false;
	});
	
});
