var buttonGrabber = setInterval(function() {
	var buttons = document.getElementsByClassName('G-Ni');
	if (buttons.length > 1) {
		var refreshButton = buttons.item(3);
		clearInterval(buttonGrabber);
		var observer = new MutationObserver(function(nodes, observer) {
			observer.disconnect();
			refreshButton.setAttribute("style", "");
			observer.observe(refreshButton, {"attributes":true});
		}).observe(refreshButton, {"attributes":true});
	}
},100);