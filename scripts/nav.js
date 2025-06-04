const code = document.getElementById("code");
const game = document.getElementById("game");
const home = document.getElementById("home");
const design = document.getElementById("design");
const music = document.getElementById("music");


code.addEventListener("mouseover", () => {
    code.classList.add("code-alt");
});
code.addEventListener("mouseleave", () => {
    code.classList.remove("code-alt");
});

game.addEventListener("mouseover", () => {
    game.classList.add("game-alt");
});
game.addEventListener("mouseleave", () => {
    game.classList.remove("game-alt");
});

home.addEventListener("mouseover", () => {
    home.classList.add("home-alt");
});
home.addEventListener("mouseleave", () => {
    home.classList.remove("home-alt");
});

design.addEventListener("mouseover", () => {
    design.classList.add("design-alt");
});
design.addEventListener("mouseleave", () => {
    design.classList.remove("design-alt");
});

music.addEventListener("mouseover", () => {
    music.classList.add("music-alt");
});
music.addEventListener("mouseleave", () => {
    music.classList.remove("music-alt");
});



