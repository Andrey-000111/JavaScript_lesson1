const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Параметры игры
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 4; // Скорость мяча по оси X
let dy = 4; // Скорость мяча по оси Y

const paddleWidth = 10;
const paddleHeight = 100;
let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 50;

// Управление ракетками
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (leftPaddleY > 0) leftPaddleY -= paddleSpeed;
            break;
        case 's':
            if (leftPaddleY < canvas.height - paddleHeight) leftPaddleY += paddleSpeed;
            break;
        case 'ArrowUp':
            if (rightPaddleY > 0) rightPaddleY -= paddleSpeed;
            break;
        case 'ArrowDown':
            if (rightPaddleY < canvas.height - paddleHeight) rightPaddleY += paddleSpeed;
            break;
    }
});

// Основная функция игры
function draw() {
    // Очистка канваса
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Отрисовка мяча
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    // Отрисовка ракеток
    ctx.fillStyle = 'white';
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

    // Движение мяча
    x += dx;
    y += dy;

    // Проверка столкновений с верхней и нижней границей
    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }

    // Проверка столкновений с ракетками
    if (x + dx < paddleWidth && y > leftPaddleY && y < leftPaddleY + paddleHeight) {
        dx = -dx;
    } else if (x + dx > canvas.width - paddleWidth && y > rightPaddleY && y < rightPaddleY + paddleHeight) {
        dx = -dx;
    }

    // Проверка выхода мяча за границы поля
    if (x + dx < 0 || x + dx > canvas.width) {
        // Сброс мяча в центр
        x = canvas.width / 2;
        y = canvas.height / 2;
        dx = 4 * (Math.random() > 0.5 ? 1 : -1); // Случайное направление
        dy = 4 * (Math.random() > 0.5 ? 1 : -1);
    }

    requestAnimationFrame(draw);
}

// Запуск игры
draw();
