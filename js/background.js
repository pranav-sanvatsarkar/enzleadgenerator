chrome.browserAction.onClicked.addListener(function(tab){
	var bttn = { file : "js/content.js" };
	chrome.tabs.executeScript(
		tab.id,
		bttn,
		function(){
			code : 'document.body.style.backgroundColor = "red"'
		}
	);
});