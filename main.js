document.getElementById("xbutton").addEventListener("click", click)
let x = 0;
let output = document.getElementById("xcount")

function click() {
    x++;
    output.innerHTML = x;
}

let cursors = 0;
let cursorOut = document.getElementById("cursor-amt")
document.getElementById("buy-cursor").addEventListener("click", buyCursor)
function buyCursor() {
    if (x >= 15) {
        x -= 15;
        cursors++;
        cursorOut.innerHTML = `${cursors} (${(cursors / 5).toFixed(1)}X/second)`;
        setInterval(() => {x++; output.innerHTML = x;}, 5000)
        output.innerHTML = x;
    }
}