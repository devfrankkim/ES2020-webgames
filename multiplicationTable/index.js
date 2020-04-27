// These will not work here. Tell me why.
// const firstValue = document.querySelector("#first").value;
// const secondValue = document.querySelector("#second").value;

document.querySelector("#click").addEventListener("click", () => {
  const firstValue = document.querySelector("#first").value;
  const secondValue = document.querySelector("#second").value;
  const result = document.querySelector("#result");
  if (firstValue) {
    if (secondValue) {
      const realValue = firstValue * secondValue;
      result.textContent = realValue;
    } else {
      result.textContent = "Input the second value";
    }
  } else {
    result.textContent = "Input the first value";
  }
});

// span=> .textContent
// input => .value
// memory =>  RAM (RAM holds the data)
// cpu  => The actual computing
// Don't repeat codes

/* 
*Teaching skills*
 In general, codes start readig from the top to the bottom, left to the right. 
 */
