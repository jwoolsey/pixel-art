// Select color input
var paint = document.getElementById('colorPicker').value;

// Select size input
var table = document.getElementById('pixelCanvas');
var rows = document.getElementById('inputHeight').value;
var cols = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit.addEventListener('click', makeGrid());

function makeGrid(rows, cols) {

// Your code goes here!
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (let r of rows) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (let c of cols) {
      var td = tr.appendChild(document.createElement('td'));
    }
  }
  return grid;
}
