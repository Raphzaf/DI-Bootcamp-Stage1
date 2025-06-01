// Define the color palette based on the original
const COLORS = [
  '#ff0000', // red
  '#ff4500', // orangered  
  '#ffa500', // orange
  '#ffff00', // yellow
  '#9acd32', // yellowgreen
  '#90ee90', // lightgreen
  '#008000', // green
  '#40e0d0', // turquoise
  '#00ffff', // cyan
  '#87ceeb', // lightskyblue
  '#0000ff', // blue
  '#000080', // navy
  '#4b0082', // indigo
  '#8b00ff', // violet
  '#ee82ee', // violet/magenta
  '#ffb6c1', // lightpink
  '#ffc0cb', // pink
  '#d3d3d3', // lightgray
  '#808080', // gray
  '#000000', // black
  '#ffffff'  // white
];

const GRID_SIZE = 35;
const BRUSH_SIZES = [1, 2, 3, 5];

// Application state
let selectedColor = COLORS[0];
let brushSize = 1;
let grid = [];
let hoveredCell = null;

// Initialize the application
function init() {
  // Initialize grid data
  grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));
  
  // Create color palette
  createColorPalette();
  
  // Create grid
  createGrid();
  
  // Add event listeners
  setupEventListeners();
}

// Create color palette in the sidebar
function createColorPalette() {
  const colorPalette = document.getElementById('colorPalette');
  colorPalette.innerHTML = '';
  
  COLORS.forEach((color, index) => {
    const colorSwatch = document.createElement('div');
    colorSwatch.className = `color-swatch ${index === 0 ? 'selected' : ''}`;
    colorSwatch.style.backgroundColor = color;
    
    // Add border for white and black colors for visibility
    if (color === '#ffffff') {
      colorSwatch.style.border = '1px solid #ccc';
    } else if (color === '#000000') {
      colorSwatch.style.border = '1px solid white';
    }
    
    colorSwatch.addEventListener('click', () => handleColorSelect(color));
    colorPalette.appendChild(colorSwatch);
  });
}

// Create the drawing grid
function createGrid() {
  const gridElement = document.getElementById('grid');
  gridElement.innerHTML = '';
  
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.style.backgroundColor = '#ffffff';
      
      cell.addEventListener('click', () => handleGridClick(row, col));
      cell.addEventListener('mouseenter', () => handleGridHover(row, col));
      
      gridElement.appendChild(cell);
    }
  }
  
  gridElement.addEventListener('mouseleave', handleGridLeave);
}

// Setup event listeners
function setupEventListeners() {
  // Clear button
  document.getElementById('clearButton').addEventListener('click', handleClear);
  
  // Brush size buttons
  document.getElementById('brushSizeSelector').addEventListener('click', (e) => {
    if (e.target.classList.contains('brush-size-button')) {
      const size = parseInt(e.target.dataset.size);
      handleBrushSizeSelect(size);
    }
  });
}

// Handle color selection
function handleColorSelect(color) {
  selectedColor = color;
  
  // Update visual selection
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.classList.remove('selected');
    if (swatch.style.backgroundColor === color) {
      swatch.classList.add('selected');
    }
  });
}

// Handle brush size selection
function handleBrushSizeSelect(size) {
  brushSize = size;
  
  // Update visual selection
  document.querySelectorAll('.brush-size-button').forEach(button => {
    button.classList.remove('selected');
    if (parseInt(button.dataset.size) === size) {
      button.classList.add('selected');
    }
  });
}

// Get cells affected by brush
function getAffectedCells(row, col, size) {
  const cells = [];
  const offset = Math.floor(size / 2);
  
  for (let r = row - offset; r < row - offset + size; r++) {
    for (let c = col - offset; c < col - offset + size; c++) {
      if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
        cells.push({ row: r, col: c });
      }
    }
  }
  return cells;
}

// Handle grid cell click
function handleGridClick(row, col) {
  const affectedCells = getAffectedCells(row, col, brushSize);
  
  for (const { row: r, col: c } of affectedCells) {
    grid[r][c] = selectedColor;
    
    // Update visual
    const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
    if (cell) {
      cell.style.backgroundColor = selectedColor;
    }
  }
}

// Handle grid hover for brush preview
function handleGridHover(row, col) {
  hoveredCell = { row, col };
  updateBrushPreview();
}

// Handle mouse leave from grid
function handleGridLeave() {
  hoveredCell = null;
  updateBrushPreview();
}

// Update brush preview
function updateBrushPreview() {
  // Clear all previews
  document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.classList.remove('brush-preview');
  });
  
  if (hoveredCell) {
    const affectedCells = getAffectedCells(hoveredCell.row, hoveredCell.col, brushSize);
    
    for (const { row, col } of affectedCells) {
      const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
      if (cell) {
        cell.classList.add('brush-preview');
      }
    }
  }
}

// Clear the grid
function handleClear() {
  // Reset grid data
  grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));
  
  // Reset visual
  document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.style.backgroundColor = '#ffffff';
    cell.classList.remove('brush-preview');
  });
}

document.addEventListener('DOMContentLoaded', init);