var audio = new Audio("./media/gg.mp3");

function pic(x) {
  if (x === 1) {
    document.body.classList = "openheimer-mode";
    document.getElementById("barbie-mode").classList = "covered mode";
    document.getElementById("openheimer-mode").classList = "mode";
    audio = new Audio("../media/gg.mp3");
    audio.play();
  }
  if (x === 2) {
    document.body.classList = "barbie-mode";
    document.getElementById("barbie-mode").classList = "mode";
    document.getElementById("openheimer-mode").classList = "mode covered";
    audio.pause();
  }
}

function uncheckboxes(x) {
  let id = "X" + x;
  let checkboxes = document.getElementsByClassName("input-checkbox");

  [].forEach.call(checkboxes, (element) => {
    if (element.name !== id) {
      element.checked = false;
    }
  });
}

