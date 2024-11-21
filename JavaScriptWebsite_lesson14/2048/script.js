const gridContainer = document.getElementById('grid-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

let grid = [];
let score = 0;

function initGame() {
    grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    score = 0;
    updateScore();
    addRandomTile();
    addRandomTile();
    renderGrid();
}

function addRandomTile() {
    const emptyTiles = [];
    
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (grid[r][c] === 0) {
                emptyTiles.push({r, c});
            }
        }
    }

    if (emptyTiles.length > 0) {
        const {r, c} = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        grid[r][c] = Math.random() < 0.9 ? 2 : 4;
    }
}

function renderGrid() {
    gridContainer.innerHTML = '';
    
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.setAttribute('data-value', grid[r][c]);
            cell.textContent = grid[r][c] === 0 ? '' : grid[r][c];
            gridContainer.appendChild(cell);
        }
    }
}

function updateScore() {
    scoreDisplay.textContent = score;
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        default:
            return;
    }
    
    addRandomTile();
    renderGrid();
});

function moveUp() {
    for (let c = 0; c < 4; c++) {
        let newRow = [];
        for (let r = 0; r < 4; r++) {
            if (grid[r][c] !== 0) newRow.push(grid[r][c]);
        }
        
        for (let i = 0; i < newRow.length - 1; i++) {
                        if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                score += newRow[i];
                newRow.splice(i + 1, 1);
            }
        }

        while (newRow.length < 4) newRow.push(0);

        for (let r = 0; r < 4; r++) {
            grid[r][c] = newRow[r];
        }
    }
}

function moveDown() {
    for (let c = 0; c < 4; c++) {
        let newRow = [];
        for (let r = 3; r >= 0; r--) {
            if (grid[r][c] !== 0) newRow.push(grid[r][c]);
        }

        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                score += newRow[i];
                newRow.splice(i + 1, 1);
            }
        }

        while (newRow.length < 4) newRow.push(0);

        for (let r = 3; r >= 0; r--) {
            grid[r][c] = newRow[3 - r];
        }
    }
}

function moveLeft() {
    for (let r = 0; r < 4; r++) {
        let newRow = [];
        for (let c = 0; c < 4; c++) {
            if (grid[r][c] !== 0) newRow.push(grid[r][c]);
        }

        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                score += newRow[i];
                newRow.splice(i + 1, 1);
            }
        }

        while (newRow.length < 4) newRow.push(0);

        for (let c = 0; c < 4; c++) {
            grid[r][c] = newRow[c];
        }
    }
}

function moveRight() {
    for (let r = 0; r < 4; r++) {
        let newRow = [];
        for (let c = 3; c >= 0; c--) {
            if (grid[r][c] !== 0) newRow.push(grid[r][c]);
        }

        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                score += newRow[i];
                newRow.splice(i + 1, 1);
            }
        }

        while (newRow.length < 4) newRow.push(0);

        for (let c = 3; c >= 0; c--) {
            grid[r][c] = newRow[3 - c];
        }
    }
}

restartButton.addEventListener('click', initGame);

initGame();
