const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

// 중복제거. 처음에는 값이 없기 때문에 비워준다. const는 값을 못 바꿔주기 때문에, let을 사용한다.
let temp;
let operator;
plusButton.addEventListener("click", () => {
  if (temp) {
    operator = "+";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      // '5' -> 5
      temp = Number(numberInput.value);
      operator = "+";
      numberInput.value = null;
      resultInput.value = null;
    }
  }
});

minusButton.addEventListener("click", () => {
  if (temp) {
    operator = "-";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      // '5' -> 5
      temp = Number(numberInput.value);
      operator = "-";
      numberInput.value = null;
      resultInput.value = null;
    }
  }
});

multiplyButton.addEventListener("click", () => {
  if (temp) {
    operator = "*";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      // '5' -> 5
      temp = Number(numberInput.value);
      operator = "*";
      numberInput.value = null;
      resultInput.value = null;
    }
  }
});

divideButton.addEventListener("click", () => {
  if (temp) {
    operator = "/";
    numberInput.value = null;
  } else {
    if (numberInput.value) {
      // '5' -> 5
      temp = Number(numberInput.value);
      operator = "/";
      numberInput.value = null;
      resultInput.value = null;
    }
  }
});

clearButton.addEventListener("click", () => {
  numberInput.value = "";
  resultInput.value = null;
  temp = null; // 초기화는 null 사용. 들어있는 값을 비워줄때 null을 사용한다.
  operator = null; // 초기화는 null를 사용
});

calculateButton.addEventListener("click", () => {
  console.log(temp, operator, numberInput.value);

  // 연산자 있으면
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        resultInput.value = temp + Number(numberInput.value);
      } else if (operator === "-") {
        resultInput.value = temp - Number(numberInput.value);
      } else if (operator === "*") {
        resultInput.value = temp * Number(numberInput.value);
      } else if (operator === "/") {
        resultInput.value = temp / Number(numberInput.value);
      }
      temp = Number(resultInput.value);
    }
  }
  // 연산자가 없으면
  else {
    if (numberInput.value) {
      resultInput.value = temp;
    }
  }
});

// 자료형 null, undefined 초기화 할 때 사용한다.
// 가독성이 좋게 해야함. 피라미드처럼 보이는 코드느 좋은 코드가 아님.
// input창에 넣은 값은 문자열을 넣은것이다. => Number로 바꿔줘야 한다.
// input의 value는 무조건 문자열이다.
// typeof 'hello' => "string", typeof 1 = "number"
