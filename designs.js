// Select color input
const selectedColour = document.getElementById('colorPicker');

// Grid size form
const gridSizeForm = document.getElementById('sizePicker');

// Main table
const pixelCanvas = document.getElementById('pixelCanvas');


function submitProcess(event) {
   event.preventDefault();

   //capture grid size values
   const gridHeight = document.getElementById('inputHeight').value;
   const gridWidth = document.getElementById('inputWidth').value;

   // When size is submitted by the user, call makeGrid()
   makeGrid(gridHeight, gridWidth);
}

// On submit event listener on grid size form
gridSizeForm.addEventListener('submit', submitProcess)


function makeGrid(height, width) {

// Clear children of table each time
pixelCanvas.innerHTML = '';

for (let i = 0; i < height; i++) {
   // Make table rows for equal to height
   let currentRow = document.createElement('tr');
   for (let j = 0; j < width; j++) {
      // Make cells equal to width for each row
      currentCell = document.createElement('td');
      // Append each cell to the current row
      currentRow.appendChild(currentCell);
   }
   // Append current row with its appended cells to the main table
   pixelCanvas.appendChild(currentRow);
}

}
