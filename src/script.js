const btn = document.querySelector(".generate");
const number = document.querySelector(".number");

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateRandomNumber);
