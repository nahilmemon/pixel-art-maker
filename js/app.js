// Make the canvas grid in the format of a table
function makeGrid() {
  // Delete the previously made grid
  const canvasTable = document.querySelector('#pixelCanvas');
  canvasTable.innerHTML = '';

  // Determine grid height and width inputs
  const gridHeight = document.querySelector('#inputGridHeight').value;
  const gridWidth = document.querySelector('#inputGridWidth').value;

  // create a DocumentFragment to store the table contents
  const fragment = document.createDocumentFragment();

  // Make the canvas table and add it the document fragment
  for (var row=0; row < gridWidth; row++) {
    // Make a table row
    const tableRow = document.createElement('tr');
    for (var col=0; col <gridHeight; col++) {
      // Make a table column
      const tableCol = document.createElement('td');
      // Add this table column to the row
      tableRow.appendChild(tableCol);
    }
    // Add this row to the fragment
    fragment.appendChild(tableRow);
  }

  // Add the table contents fragment to the table
  canvasTable.appendChild(fragment);
}

// Call the makeGrid() function when the 'Create Canvas' input gets clicked
const createCanvasInput = document.querySelector('#createCanvasInput');
createCanvasInput.addEventListener('click', makeGrid);