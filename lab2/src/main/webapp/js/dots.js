const svg = document.getElementById("svg");
svg.addEventListener("click", (e) => {
    errors.innerHTML = "";
    let r = validateR();
    if (isNumber(r)) {
        const mouseX = parseInt((10000*(e.clientX - svg.getBoundingClientRect().left - 150) / 60 * r / 2).toString())/10000;
        const mouseY = parseInt((10000*(-(e.clientY - svg.getBoundingClientRect().top - 150) / 60 * r / 2)).toString())/10000;
        const data = {
            "x": mouseX.toString(),
            "y": mouseY.toString(),
            "r": r.toString()
        };
        savePoint(mouseX, mouseY,r);
        dot(e.clientX-svg.getBoundingClientRect().left,e.clientY-svg.getBoundingClientRect().top);
        sending(data).then(response => response.text()).then(response => processResponse(response)).catch(error => console.error("Error:", error));
    } else {
        errors.innerHTML += "Choose R before clicking!";
    }
});
function savePoint(x, y,r) {
    const points = JSON.parse(sessionStorage.getItem('points')) || [];
    points.push({ x, y , r});
    sessionStorage.setItem('points', JSON.stringify(points));
}
function dot(x, y) {
    console.log(x,y);
    svg.insertAdjacentHTML("beforeend", `<circle r="3" cx="${x}" cy="${y}" fill-opacity="0.7" fill="red" stroke="firebrick"></circle>`);
}

const radiusInputs = document.querySelectorAll('input[name="radius"]');
radiusInputs.forEach(input => {
    input.addEventListener('change', () => {
        const selectedRadius = input.value;
        // Clear existing points
        clearPoints();
        // Redraw points based on the new radius
        redrawPoints(selectedRadius);
    });
});
function clearPoints() {
    const points = document.querySelectorAll('circle');
    points.forEach(point => point.remove());
}

function redrawPoints(radius) {
    const storedPoints = JSON.parse(sessionStorage.getItem('points')) || [];
    storedPoints.forEach(point => {
        let x = point.x*2*60/radius+150;
        let y = -point.y*2*60/radius+150;
        dot(x,y);
        console.log(x,y);
    });
}

