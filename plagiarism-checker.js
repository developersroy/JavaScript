var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:600px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Plagiarism checker provided by <a href="https://www.ehmasroy.com/" target="_blank"  style="color:#000;">Ehmasroy.com</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://www.ehmasroy.com/'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Plagiarism checker provided by <a href="https://www.ehmasroy.com/" target="_blank"  style="color:#000;">Ehmasroy.com</a></p></div>';
	}
}

var isNew = document.getElementById("ppsWidgetCode");
if(isNew === null){
	document.write('<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:520px;height:100%;"></iframe>');
} else {
	document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
}