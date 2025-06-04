const allImgs = document.getElementsByClassName("sub-img");

for (let i = 0; i < allImgs.length; i++){
     allImgs[i].addEventListener("mouseover", () => {        
        //splotch[i].style.animation = "hia 1.5s";
        allImgs[i].style.transform = "translate("+Math.floor(Math.random() * 10-5)+"vw, "+Math.floor(Math.random() * 10-5)+"vw) " + "rotate(" + Math.floor(Math.random()*50-25) + "deg)";
        //allImgs[i].style.transform = "scale(3)";
    });
    allImgs[i].addEventListener("click", () => {  
        allImgs[i].style.transform = "translate(0px, 0px) rotate(0deg)";
    });
}

