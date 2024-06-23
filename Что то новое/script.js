console.log("Я загадал число от 1 до 10. Попробуй его отгадать!");
let secretNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 3;

while(attempts > 0) {
    let userNumber = Number(prompt("Введите число: "));

    if (userNumber < secretNumber) {
        console.log("Секретное число больше");
        attempts = attempts - 1;
    } else if (userNumber === secretNumber) {
        console.log("Вы угадали");
        break
    } else {
        console.log("Секретное число меньше");
        attempts = attempts - 1;
    }
}