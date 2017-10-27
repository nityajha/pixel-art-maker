var penColor = "black";
function setPenColor(pen){
	penColor = pen;
}
function setPixelColor(pixel){
	pixel.style.backgroundColor = penColor;
}

var routput = ' ';
var coutput = ' ';

document.getElementById("1").click(function() {
    event.preventDefault();
    rows = document.getElementById('#input_height').value;
    columns = document.getElementById('#input_width').value;
    makeGrid(rows, columns);
});
makeGrid(rows, columns){
	for ( var a=0; a<rows; a++){
		routput = '<div class = "row">';
		document.getElementById('art').innerHTML = routput;
		for (var b=0; b<columns; b++){
			coutput = '<div class="pixel" onclick = "setPixelColor(this)"></div>';
			document.getElementByClass('row').innerHTML = coutput;
		}
		document.getElementById('art').innerHTML = '</div>';
	}
};
