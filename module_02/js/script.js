const num1 = "Taba";
const num2 = "Sharm";
const num3 = "Hurgada"

let num = prompt('Введите число от 1 до 3-х: Taba - 1, Sharm - 2, Hurgada - 3');
let res;

switch (num) {
  case "1" : res = "Taba"; break;
  case "2": res = "Sharm"; break;
  case "3"  : res = "Hurgada"; break;
  default  : res = "Введите верное число!";
}

console.log(`Вашему вниманию предлагается ${res}!`)