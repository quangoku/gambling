const RESULT = document.getElementById("result");
const DICE_IMAGES = document.getElementById("dice_images");
const BALANCE = document.getElementById("balance");
const TAI = document.getElementById("tai");
const XIU = document.getElementById("xiu");

BALANCE.textContent=Number(localStorage.getItem("value"));
console.log(localStorage.getItem("value"));

function roll() {
  if(Number(BALANCE.textContent)<=0)
  {
    alert("U R BROKE BRO GO GET SOME MONEY");
    return;
  }
  const MONEY = document.getElementById("money").value;
  
  if(parseInt(BALANCE.textContent)<parseInt(MONEY))
  {
    alert("NOT ENOUGH MONEY");
    return;
  }
  let sum = 0;
  let image = [];
  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    image.push(`<img src="${value}.png">`);
    sum += value;
  }
  DICE_IMAGES.innerHTML = image.join("");
  if (XIU.checked) {
    if (sum <= 10) {
      BALANCE.textContent = Number(BALANCE.textContent) + Number(MONEY);
      RESULT.textContent = "XIU";
      localStorage.setItem("value",BALANCE.textContent);
    } else {
      BALANCE.textContent = Number(BALANCE.textContent) - Number(MONEY);
      RESULT.textContent = "TAI";
      localStorage.setItem("value",BALANCE.textContent);
    }
  } else if (TAI.checked) {
    if (sum > 10) {
      BALANCE.textContent = Number(BALANCE.textContent) + Number(MONEY);
      RESULT.textContent = "TAI";
      localStorage.setItem("value",BALANCE.textContent);
    } else {
      BALANCE.textContent = Number(BALANCE.textContent) - Number(MONEY);
      RESULT.textContent = "XIU";
      localStorage.setItem("value",BALANCE.textContent);
    }
  }
  else{
    alert("check one");
  DICE_IMAGES.innerHTML = "";
  }
}
function reset() {
  RESULT.textContent = "";
  DICE_IMAGES.innerHTML = "";
  BALANCE.textContent="100";
}
