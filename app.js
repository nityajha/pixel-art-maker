var penColor = "black";

function setPenColor(pen){
	penColor = pen;
}
function setPixelColor(pixel){
	pixel.style.backgroundColor = penColor;
}

var i = document.getElementById("rownum").value;
var j= document.getElementById("colnum").value;
var routput = ' ';
var coutput = ' ';

for ( var a=2; a<i; a++){
	routput += '<div class = "row">';
	document.getElementById('art').innerHTML = routput;
	for (var b=2; b<j; b++){
		coutput += '<div class="pixel" onclick = "setPixelColor(this)"></div>';
		document.getElementByClass('row').innerHTML = coutput;
		
	}
}


	
