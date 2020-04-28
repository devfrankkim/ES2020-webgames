// Loading
const btn = document.querySelector("#button"); // getting HTML tag. [Object]
const dictionary = [];

btn.addEventListener("click", () => {
  const word = document.querySelector("#word").textContent; //
  const input = document.querySelector("#input").value; //
  const lastIndex = word.length - 1;
  const prevWord = word[lastIndex];
  const currentWord = input[0];
  if (dictionary.includes(input)) {
    document.querySelector("#error").textContent = `${input}No repeating!!`;
    document.querySelector("#input").focus(); // #input, cursor focus
    document.querySelector("#input").value = ""; // Delete #input tag
  } else {
    if (prevWord === currentWord) {
      // LastIndex of previous word === firstIndex of current word
      document.querySelector("#word").textContent = input; // #word Tag= input value
      document.querySelector("#error").textContent = "";
      document.querySelector("#input").value = ""; // #input section clear
      document.querySelector("#input").focus(); // #input, cursor focus
      dictionary.push(input);
    } else {
      document.querySelector("#error").textContent = "Wrong"; //error
      document.querySelector("#input").value = ""; // Delete #input tag
      document.querySelector("#input").focus(); // #input, cursor focus
    }
  }
});

// input => value
// div, span, button => textContent
