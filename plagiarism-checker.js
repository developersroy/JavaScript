

var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:600px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Plagiarism checker provided by <a href="https://www.ehmasroy.com/" id="ppsLink" target="_blank"  style="color:#000;">Ehmasroy.com</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://www.prepostseo.com/plagiarism-checker'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p>Plagiarism checker provided by <a href="https://www.ehmasroy.com/" id="ppsLink" target="_blank"  style="color:#000;">Ehmasroy.com</a></p></div>';
	}
}
