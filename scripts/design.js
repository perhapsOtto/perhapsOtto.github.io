const allImgs = document.getElementsByClassName("proj-img");
const splotch = document.getElementsByClassName("splotch");
const logo = document.getElementById("logo")


for (let i = 0; i < allImgs.length; i++){
     allImgs[i].addEventListener("mouseover", () => {        
        //splotch[i].style.animation = "hia 1.5s";
        splotch[i].style.transform = "scale(3, 2)";
        //splotch[i].style.transform = "rotate("+ Math.random() * 360 +"deg)";
    });
    allImgs[i].addEventListener("mouseleave", () => {
        //splotch[i].style.animation = "test 1.5s";
        //splotch[i].style.transform = "rotate("+ 0 +"deg)";
        splotch[i].style.transform = "scale(1)";
    });
}

logo.addEventListener("mouseover", () => {
    logo.setAttribute("src", "../images/otto_logo.gif");
});
logo.addEventListener("mouseleave", () => {
    logo.setAttribute("src", "../images/otto-logo-static.png");
});

