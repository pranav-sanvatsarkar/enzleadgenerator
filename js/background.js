chrome.browserAction.onClicked.addListener(function(tab){
	console.log('This page will now turn Red');
	chrome.tabs.executeScript({
		code : 'document.body.style.backgroundColor = "red"'
	});
});