window.addEventListener('message', function(event) {
  var action = event.data.action;
  switch(action) {
    case 'vimeoParseConfig':
	eval('var config = '+event.data.config);
	
	event.source.postMessage({
		action: 'vimeoParseConfig',
		config: config
	}, event.origin);
      break;
  }
});
