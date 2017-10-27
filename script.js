var penColor = "black";
function setPenColor(pen){
	penColor = pen;
}
function setPixelColor(pixel){
	pixel.style.backgroundColor = penColor;
}

var routput = ' ';
var coutput = ' ';

function inputs() {
    event.preventDefault();
    var rows = document.getElementById("rownum").value;
    var columns = document.getElementById("colnum").value;
    makeGrid(rows, columns);
}
var grid = '';
function makeGrid(rows, columns){
    console.log(rows, columns);
    for ( var a=0; a<rows; a++){
        grid += '<div class = "row">';
        //document.getElementById('art').innerHTML = row_output;
        for (var b=0; b<columns; b++){
            grid += '<div class="pixel" onclick = "setPixelColor(this)"></div>';
            //document.getElementsByClassName('row').innerHTML = col_output;
        }
        //document.getElementById('art').innerHTML = '</div>';
        grid += '</div>';
        document.getElementById('art').innerHTML = grid;
    }
    grid = '';
}