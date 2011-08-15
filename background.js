var theButton;
var ToolbarUIItemProperties = {
	title: "FoOlSlide",
	icon: "50.png",
	popup: {
		href: "popup.html",
		width: 400,
		height: 430
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


function fetchLatest()
{
	var sites = [{
		"site":"http://reader.kireicake.com/"
	}, {
		"site":"http://foolrulez.org/slide/"
	}];
	var result = [];
	jQuery.each(sites, function(index, value){
		jQuery.getJSON(value.site + "api/reader/chapters/orderby/desc_created/", function(data){
			jQuery.merge(result, data.chapters);
		});
	});
	//result.sort(sortByDateTime);
	return result;
}

function sortByDateTime(a,b)
{
	return dateTimeToDate(a.chapter.created) > dateTimeToDate(b.chapter.created)
}

function dateTimeToDate(timestamp) {
	//function parses mysql datetime string and returns javascript Date object
	//input has to be in this format: 2007-06-05 15:26:02
	var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
	var parts=timestamp.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
	return new Date(parts[0],parts[1]-1,parts[2],parts[3],parts[4],parts[5]);
}

function addSeries()
{
	
}

function removeSeries()
{
	
}

function addSlide()
{
	
}

function removeSlide()
{
	
}