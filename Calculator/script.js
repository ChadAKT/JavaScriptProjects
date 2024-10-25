const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = ""; 
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1); 
    } else if (display.innerText !== "" && item.id === "equal") {
      try {
        display.innerText = eval(display.innerText); 
      } catch (error) {
        display.innerText = "Error!";
        setTimeout(() => (display.innerText = ""), 2000); 
      }
    } else if (display.innerText === "" && item.id === "equal") {
      display.innerText = "Please enter a value!";
      setTimeout(() => (display.innerText = ""), 2000); 
    } else {
    
      const lastChar = display.innerText.slice(-1);
      const operators = ['+', '-', '*', '/'];
      if (operators.includes(item.id) && operators.includes(lastChar)) {
        return; 
      }
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true; 

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

  if (isDark) {
    toggleIcon.classList.remove("bx-sun");
    toggleIcon.classList.add("bx-moon");
  } else {
    toggleIcon.classList.remove("bx-moon");
    toggleIcon.classList.add("bx-sun");
  }
};
