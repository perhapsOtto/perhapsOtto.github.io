const myImage = document.querySelector(".photo");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/me.jpeg") {
    myImage.setAttribute("src", "images/goat.JPG");
  } else {
    myImage.setAttribute("src", "images/me.jpeg");

  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello ${myName}!`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}!`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
  