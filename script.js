let ball = document.querySelector(".ball");
let divResult = document.querySelector(".result");
let divArr = document.querySelector(".title_with_button");

let now = new Date();

let specialArr = [];
let stringArr = document.createElement("p");
stringArr.className = "arr";

ball.addEventListener("click", function () {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let left = Math.ceil(Math.random() * (width - 10));
  let top = Math.ceil(Math.random() * (height - 10));
  ball.style.top = `${top}px`;
  ball.style.left = `${left}px`;
  let timeClick = new Date();
  timeResult = (timeClick - now) / 1000;
  timeResult = timeResult.toFixed(2);
  now = timeClick;

  specialArr.push(timeResult);

  let sumArr = specialArr.reduce((a, b) => +a + +b, 0);
  console.log(sumArr);
  let resultArr = (sumArr / specialArr.length).toFixed(2);

  draw(resultArr);
});

function draw(resultArr) {
  let stringResult = document.createElement("p");
  stringResult.className = "result__p";

  if (timeResult == Math.min(...specialArr)) {
    stringResult.classList.add("record");
  }

  divArr.innerHTML = `
<p class="title">Твоя скорость кликов 💪</p>
<button class="button">начать заново</button>
`;

  stringResult.innerText = `⚾ ${timeResult} сек`;
  divResult.append(stringResult);

  stringArr.innerText = `Средний результат: ${resultArr} сек`;
  divArr.append(stringArr);

  let button = divArr.querySelector(".button");
  button.addEventListener("click", function () {
    divResult.innerHTML = ``;
    specialArr = [];
    //   stringArr.innerText = "";
    stringArr.remove();
    divArr.innerHTML = "";
  });
}
