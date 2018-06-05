//Set Grid Size
var gridForm = $('#sizePicker');
var table = document.getElementById('pixelCanvas');
var rows;
var cols;

//When size submitted by user, call makeGrid()
gridForm.submit(function() {
  //preventDefault
  event.preventDefault();

  //clear any previous grids
  resetTable();

  //fetch user input size
  rows = document.getElementById('inputHeight').value;
  cols = document.getElementById('inputWidth').value;

  //make the grid
  console.log('r' + rows + 'c' + cols);
  makeGrid(rows, cols);
});

function makeGrid(rows, cols) {
  console.log('r' + rows + 'c' + cols);

  for (var r = 1; r <= rows; r++) {
    var tr = table.appendChild(document.createElement('tr'));
    for (var c = 1; c <= cols; c++) {
      var td = tr.appendChild(document.createElement('td'));
    }
  }
  document.body.appendChild(table);
}

function resetTable() {
  var el = document.getElementById('pixelCanvas');
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

//Set cell color on click
$('#pixelCanvas').on('click', 'td', function() {
  var paintColor = document.getElementById('colorPicker').value;
  $(this).css('background-color', paintColor);
});
