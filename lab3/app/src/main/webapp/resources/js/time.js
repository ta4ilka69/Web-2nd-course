let locale = "en-US";
let options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}
function updateTime() {
    console.log(new Date().toLocaleString(locale, options).toString());
    document.getElementById('clock').textContent = new Date().toLocaleString(locale, options).toString();
}
function setTimer(){
    updateTime();
    setInterval(updateTime, 12000);
}
