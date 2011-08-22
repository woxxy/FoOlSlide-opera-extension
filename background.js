var theButton;
var ToolbarUIItemProperties = {
	title: "FoOlSlide",
	icon: "50.png",
	popup: {
		href: "popup.html",
		width: 316,
		height: 560
	},
	badge: {
		display: "block",
		textContent: "23",
		color: "white",
		backgroundColor: "rgba(211, 0, 4, 1)"
	}
}
theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
opera.contexts.toolbar.addItem(theButton);