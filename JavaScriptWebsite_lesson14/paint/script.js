const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
const brushSize = document.getElementById('brushSize');
const brushSizeValue = document.getElementById('brushSizeValue');

canvas.width = window.innerWidth - 40; // Установите ширину канваса
canvas.height = window.innerHeight - 100; // Установите высоту канваса

let drawing = false;
let color = colorPicker.value;
let lineWidth = brushSize.value; // Начальная ширина пера

// Начало рисования
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

// Рисование
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth; // Используем выбранную ширину пера
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
    }
});

// Окончание рисования
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

// Очистка канваса
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Изменение цвета
colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
});

// Изменение ширины пера
brushSize.addEventListener('input', (e) => {
    lineWidth = e.target.value; // Обновляем ширину пера
    brushSizeValue.textContent = lineWidth; // Обновляем отображаемое значение
});
