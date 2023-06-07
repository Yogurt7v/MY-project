const app = document.getElementById("app");
console.log(app);

const buttonSize = app.querySelector(".form-size button");
console.log(buttonSize);

const buttonMiddle = app.querySelector(".form-middle button");
console.log(buttonMiddle);

buttonSize.addEventListener("click", () => {
  const inputSize = app.querySelector(".form-size input");
  const inputSizeValue = inputSize.value;
  console.log(inputSizeValue);

  //добавили количество документов

  // const doc = '<div class="item">' + inputValue + "</div>";

  // const list = app.querySelector(".list");
  // list.innerHTML += doc;
});
buttonMiddle.addEventListener("click", () => {
  const inputMiddle = app.querySelector(".form-middle input");
  const inputMiddleValue = inputMiddle.value;
  console.log(inputMiddleValue);
});

const randomize = () => {
  for (let i = 1; i <= inputSizeValue; i++) {
    const doneValue = Math.floor(
      Math.random() * (inputMiddleValue - inputMiddleValue / 0.2) -
        inputMiddleValue * 0.2 +
        1 +
        inputMiddleValue * 0.2
    );
    const doc = '<div class="item">' + doneValue + "</div>";
    const list = app.querySelector(".list");
    list.innerHTML += doc;
  }
};

const buttonStart = app.querySelector(".start");
buttonStart.addEventListener("click", () => {
  const randomize = () => {
    for (let i = 1; i <= inputSizeValue; i++) {
      const doneValue = Math.floor(
        Math.random() * (inputMiddleValue - inputMiddleValue / 0.2) -
          inputMiddleValue * 0.2 +
          1 +
          inputMiddleValue * 0.2
      );
      const doc = '<div class="item">' + doneValue + "</div>";
      const list = app.querySelector(".list");
      list.innerHTML += doc;
    }
  };
});
