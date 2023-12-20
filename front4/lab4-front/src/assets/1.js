const svg = document.getElementById("svg");
svg.addEventListener("click", (e) => {
    errors.innerHTML = "";
    let r = validateR();
    if () {
        const mouseX = parseInt((10000*(e.clientX - svg.getBoundingClientRect().left - 150) / 60 * r / 2).toString())/10000;
        const mouseY = parseInt((10000*(-(e.clientY - svg.getBoundingClientRect().top - 150) / 60 * r / 2)).toString())/10000;
        const vata = {
            "x": mouseX.toString(),
            "y": mouseY.toString(),
            "r": r.toString()
        };