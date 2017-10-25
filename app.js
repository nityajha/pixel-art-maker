var penColor = "black";

function setPenColor(pen){
	penColor = pen;
}
function setPixelColor(pixel){
	pixel.style.backgroundColor = penColor;
}

var i = 2;
var j= 2;
var r = $("#art");
var c = $(".row");
var rows;
rows = $(<'div class = "pixel" onclick = "setPixelColor(this)"></div>');

for ( var a=0; a<i; a++){
	r.append(rows);
	for (var b=0; b<j; b++){
		c.append(rows);
	}
}

	
