const logo = document.getElementById("logo")

logo.addEventListener("mouseover", () => {
    logo.setAttribute("src", "../images/otto_logo.gif");
});
logo.addEventListener("mouseleave", () => {
    logo.setAttribute("src", "../images/otto-logo-static.png");
});