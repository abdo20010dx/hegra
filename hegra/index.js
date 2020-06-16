function openNav() {
document.getElementById("mySidepanel").style.width = "230px";
}

function closeNav() {
document.getElementById("mySidepanel").style.width = "0px";
}



//this method for page load
setTimeout(() => {
    document.getElementsByClassName("loading")[0].className="stopload";

}, 3000);
