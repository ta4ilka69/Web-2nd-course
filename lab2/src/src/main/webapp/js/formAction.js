const form = document.querySelector(".input-form");
const svg = document.getElementById("svg");
const errors = document.getElementById("error-logs");
svg.addEventListener("click", (e) => {
    errors.innerHTML = "";
    let r = validateR();
    if (isNumber(r)) {
        const mouseX = (e.clientX - svg.getBoundingClientRect().left - 150) / 60 * r / 2;
        const mouseY = -(e.clientY - svg.getBoundingClientRect().top - 150) / 60 * r / 2;
    } else {
        errors.innerHTML += "Choose R before clicking!";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendForm();
});

function sendForm() {
    let x = validateX();
    let y = validateY();
    let r = validateR();
    console.log(x, y, r);
    errors.innerHTML = "";
    if (isNumber(x) && isNumber(y) && isNumber(r)) {
        const data = {
            "x": x.toString(),
            "y": y.toString(),
            "r": r.toString()
        }
        let params = new URLSearchParams(data).toString()
        fetch("control", {
            method: "POST",
            body: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.text())
            .then(response => processResponse(response))
            .catch(error => console.error("Error:", error));
    } else {
        if (!isNumber(x)) {
            errors.innerHTML +=
                "Choose one option for X! ";
        }
        if (!isNumber(y)) {
            errors.innerHTML +=
                "Type float for Y from -3 to 3! ";
        }
        if (!isNumber(r)) {
            errors.innerHTML +=
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
    return 0;
}

document.addEventListener("DOMContentLoaded", function () {
    const data = {}
    let params = new URLSearchParams(data).toString()
    fetch("control", {
        method: "POST",
        body: params,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => response.text())
        .then(response => {
            processResponse(response)
        })
        .catch(error => console.error("Error:", error));
});
