function sendForm()  {
  let x = validateX();
  let y = validateY();
  let r = validateR();
  document.getElementById("error-logs").innerHTML = "";
  if (isNumber(x) && isNumber(y) && isNumber(r)) {
    console.log(x, y, r);
  } else {
    if (!isNumber(x)) {
      document.getElementById("error-logs").innerHTML +=
        "Choose one option for X! ";
    }
    if (!isNumber(y)) {
      document.getElementById("error-logs").innerHTML +=
        "Type float for Y from -3 to 5! ";
    }
    if (!isNumber(r)) {
      document.getElementById("error-logs").innerHTML +=
        "Type float for R from 2 to 5! ";
    }
  }
  clearAll();
}

function validateFloat(str) {
  return parseFloat(str.replace(",", "."));
}

function validateX() {
  let checkboxes = document.getElementsByClassName("input-checkbox");
  let x = Infinity;
  [].forEach.call(checkboxes, (el) => {
    if (el.checked === true) {
      x = parseInt(el.name.replace("X", ""));
    }
  });
  return x;
}

function isNumber(x) {
  return !isNaN(x) && isFinite(x) && x !== false;
}

function validateY() {
  let y = validateFloat(document.getElementById("Y-input").value);
  if (!(-3 <= y && y <= 5)) {
    y = Infinity;
  }
  return y;
}

function validateR() {
  let r = validateFloat(document.getElementById("R-input").value);
  if (!(2 <= r && r <= 5)) {
    r = Infinity;
  }
  return r;
}

function clearAll(){
  [].forEach.call(document.getElementsByClassName("input-checkbox"), el =>{
    el.checked = false;
  });
  document.getElementById("Y-input").value = "";
  document.getElementById("R-input").value = "";
}