// Select color input
var paint = document.getElementById('colorPicker').value;
//var gridForm = $('#sizePicker');
paint.addEventListener("switch", colors(), false);

// Select size input


// When size is submitted by the user, call makeGrid()
$(document).ready($('#submit').on('click', function(event) {
  //Prevent preventDefault
  event.preventDefault();

  //Fetch user size input
  var rows = document.getElementById('inputHeight').value;
  var cols = document.getElementById('inputWidth').value;

  //make the grid
  console.log(rows + cols);
  makeGrid(rows, cols);
}));

function makeGrid(rows, cols) {
  var table = document.getElementById('pixelCanvas');
// Your code goes here!
  for (var r = 1; r <= rows; r++) {
    var tr = table.append(document.createElement('tr'));
    for (var c = 1; c <= cols; c++) {
      var td = tr.append(document.createElement('td'));
    }
  }
  document.body.appendChild(table);
}



// Select Colors
function colors() {
  let paintColor = paint.value;
  grid.style.color = paintColor;
  return paintColor;
}
