function createBoard(columns) {
    for (let i = 0; i < count; i++) {
        gameTable.append(createCard());
    }
    const gameTable = template.querySelector(".table");
  
    gameTable.style = `
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${columns}, 1fr);
    `;
}

function createCard(card) {

}

const startButton = document.querySelector('.board__button');

startButton.addEventListener("click", (event) => {
    event.preventDefault()
    const input = document.querySelector(".board__input");

    let columns = input.value;
    let count;

    if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
        count = columns * columns;
    } else {
        alert("Нужно написать четное число в указанном диапазоне!");
        return;
    }

    createBoard(count, columns);
})
    

