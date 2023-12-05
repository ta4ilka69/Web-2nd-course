function handleClick(e) {
    const svg = document.getElementsByTagName("svg")[0];
    let errorrr = document.getElementById("errorrr");
    let ch = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(ch.length);
    if(ch.length!==1){
        errorrr.style.color = "red";
        errorrr.style.display = "block";
    }
    else {
        errorrr.style.display = "none";
        let rValues = [1, 1.5, 2, 2.5, 3];
        let chb = document.querySelectorAll('input[type="checkbox"]');
        let r;
        for (let i = 0; i < chb.length; i++) {
            if (chb[i].checked) {
                r = rValues[i];
                break;
            }
        }
        const mouseX = parseInt((10000 * (e.clientX - svg.getBoundingClientRect().left - 150) / 60 * r / 2).toString()) / 10000;
        const mouseY = parseInt((10000 * (-(e.clientY - svg.getBoundingClientRect().top - 150) / 60 * r / 2)).toString()) / 10000;
        console.log(mouseX);
        console.log(mouseY);
        console.log(r);
        executeAddPoint([{name: "x", value: mouseX}, {name: "y", value: mouseY}, {name: "r", value: r}]);
    }
}
