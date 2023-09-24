function sendForm() {
  let x = validateX();
  let y = validateY();
  let r = validateR();
  document.getElementById("error-logs").innerHTML = "";
  if (isNumber(x) && isNumber(y) && isNumber(r)) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://0.0.0.0:9003?x=" + x + "&y=" + y + "&r=" + r, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = xhr.responseText;
        processResponse(response);
      }
    };
    xhr.send();
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

function clearAll() {
  [].forEach.call(document.getElementsByClassName("input-checkbox"), el => {
    el.checked = false;
  });
  document.getElementById("Y-input").value = "";
  document.getElementById("R-input").value = "";
}

function processResponse(response) {
  let date = new Date();
  let received = date.toLocaleString("ru", {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  let res = JSON.parse(response);
  let x = res.x;
  let y = res.y;
  let r = res.r;
  let result = res.result;
  let time = res.time;
  const table = document.getElementById("table-results");
  const newRow = document.createElement("tr");
  const xTd = document.createElement("td");
  xTd.textContent = x;
  const yTd = document.createElement("td");
  yTd.textContent = y;
  const rTd = document.createElement("td");
  rTd.textContent = r;
  const resultTd = document.createElement("td");
  resultTd.textContent = result;
  const timeTd = document.createElement("td");
  timeTd.textContent = time;
  const receivedTd = document.createElement("td");
  receivedTd.textContent = received;
  newRow.appendChild(xTd);
  newRow.appendChild(yTd);
  newRow.appendChild(rTd);
  newRow.appendChild(resultTd);
  newRow.appendChild(timeTd);
  newRow.appendChild(receivedTd);
  table.appendChild(newRow);
}