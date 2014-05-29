var buttonGrabber = setInterval(function() {
	var refreshButton = document.evaluate("//*[@id=\":5\"]/div[3]/div[1]/div[1]/div/div/div[4]",document,null,9,null).singleNodeValue;
	if (refreshButton !== null) {
		clearInterval(buttonGrabber);
		var observer = new MutationObserver(function(nodes, observer) {
			observer.disconnect();
			refreshButton.setAttribute("style", "");
			observer.observe(refreshButton, {"attributes":true});
		}).observe(refreshButton, {"attributes":true});
	}
},100);