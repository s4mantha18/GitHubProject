let logo = document.getElementById("logo");
function checkScroll(){
   if(window.scrollY>85){
    logo.classList.add("hide")
    return
}
logo.classList.remove("hide")
}
window.addEventListener("scroll",checkScroll)