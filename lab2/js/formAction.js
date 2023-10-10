const form = document.querySelector(".input-form");
const svg = document.getElementById("svg");
svg.addEventListener("click", (e) => {
  let r = validateR();
  if (isNumber(r)) {
    const mouseX = (e.clientX - svg.getBoundingClientRect().left - 150)/60*r/2;
    const mouseY = -(e.clientY - svg.getBoundingClientRect().top - 150)/60*r/2;
    console.log(mouseX, mouseY);
  }
  else{
    alert("Choose R first!");
  }
});

document.addEventListener("DOMContentLoaded", (e) => {});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendForm();
});

function sendForm() {
  let x = validateX();
  let y = validateY();
  let r = validateR();
  console.log(x, y, r);
  document.getElementById("error-logs").innerHTML = "";
  if (isNumber(x) && isNumber(y) && isNumber(r)) {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "http://localhost:6969/serv.php?x=" + x + "&y=" + y + "&r=" + r,
      true
    );
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
        "Type float for Y from -3 to 3! ";
    }
    if (!isNumber(r)) {
      document.getElementById("error-logs").innerHTML +=
        "Choose one option for R!";
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
      x = parseFloat(el.name.replace("X", ""));
    }
  });
  return x;
}

function isNumber(x) {
  return !isNaN(x) && isFinite(x) && x !== false;
}

function validateY() {
  let y = validateFloat(document.getElementById("Y-input").value);
  if (!(-3 <= y && y <= 3)) {
    y = Infinity;
  }
  return y;
}

function validateR() {
  let radioboxes = document.getElementsByName("radius");
  let r = Infinity;
  radioboxes.forEach((el) => {
    if (el.checked === true) {
      r = parseFloat(el.value);
    }
  });
  return r;
}
function clearAll() {
  [].forEach.call(document.getElementsByClassName("input-checkbox"), (el) => {
    el.checked = false;
  });
  [].forEach.call(document.getElementsByClassName("input-radio"), (el) => {
    el.checked = false;
  });
  document.getElementById("Y-input").value = "";
}

function processResponse(response) {
  let date = new Date();
  let received = date.toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  let res = JSON.parse(response);
  res.push(received);
  addRowToTable(res);
  let savedData = localStorage.getItem("data");
  if (savedData) {
    let data = JSON.parse(savedData);
    data.push(res);
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    let data = [];
    data.push(res);
    localStorage.setItem("data", JSON.stringify(data));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let savedData = localStorage.getItem("data");
  if (savedData) {
    let data = JSON.parse(savedData);
    data.forEach(function (item) {
      addRowToTable(item);
    });
  }
});

function addRowToTable(data) {
  let table = document.getElementById("table-results");
  let newRow = document.createElement("tr");
  let xTd = document.createElement("td");
  xTd.textContent = data[0];
  let yTd = document.createElement("td");
  yTd.textContent = data[1];
  let rTd = document.createElement("td");
  rTd.textContent = data[2];
  let resultTd = document.createElement("td");
  resultTd.textContent = data[3];
  if (data[3] == "Success") {
    resultTd.classList = "success";
  }
  let timeTd = document.createElement("td");
  timeTd.textContent = data[4];
  let receivedTd = document.createElement("td");
  receivedTd.textContent = data[5];
  newRow.appendChild(xTd);
  newRow.appendChild(yTd);
  newRow.appendChild(rTd);
  newRow.appendChild(resultTd);
  newRow.appendChild(timeTd);
  newRow.appendChild(receivedTd);
  table.appendChild(newRow);
}
