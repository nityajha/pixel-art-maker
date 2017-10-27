var penColor = "black";
function setPenColor(pen){
	penColor = pen;
}
function setPixelColor(pixel){
	pixel.style.backgroundColor = penColor;
}

var row_output = ' ';
var col_output = ' ';

document.getElementById("1").click(function() {
    event.preventDefault();
    rows = document.getElementById('#input_height').value;
    columns = document.getElementById('#input_width').value;
    makeGrid(rows, columns);
});
makeGrid(rows, columns){
	for ( var a=0; a<rows; a++){
		row_output = '<div class = "row">';
		document.getElementById('art').innerHTML = row_output;
		for (var b=0; b<columns; b++){
			col_output = '<div class="pixel" onclick = "setPixelColor(this)"></div>';
			document.getElementByClass('row').innerHTML = col_output;
		}
		document.getElementById('art').innerHTML = '</div>';
	}
};
