let audio = new Audio("./resources/media/gg.mp3");
function pic(x) {
    if (x === 1) {
        document.body.classList = "openheimer-mode";
        document.getElementById("barbie-mode").classList = "covered mode";
        document.getElementById("openheimer-mode").classList = "mode";
        audio = new Audio("./resources/media/gg.mp3");
        audio.play();
    }
    if (x === 2) {
        document.body.classList = "barbie-mode";
        document.getElementById("barbie-mode").classList = "mode";
        document.getElementById("openheimer-mode").classList = "mode covered";
        audio.pause();
    }
}
function changeR(r){
    changeRadius([{name: "r", value: r}]);
}
