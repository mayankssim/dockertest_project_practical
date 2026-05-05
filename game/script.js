let box = document.getElementById("box");
let scoreDisplay = document.getElementById("score");
let score = 0;

function moveBox() {
    let x = Math.random() * 350;
    let y = Math.random() * 350;

    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreDisplay.innerText = score;
    moveBox();
});

// Move box every 1 second
setInterval(moveBox, 1000);

// Initial position
moveBox();