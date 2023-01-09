let x = +getCookie("x");
let cursors = +getCookie("cursors");
let cursorOut = document.getElementById("cursor-amt");
let output = document.getElementById("xcount");
output.innerHTML = x;
cursorOut.innerHTML = `${cursors} (${(cursors / 5).toFixed(1)}X/second)`;

document.addEventListener("click", updateCookies);
function updateCookies() {
    document.cookie = `x=${x}`;
    document.cookie = `cursors=${cursors}`;
}

document.getElementById("xbutton").addEventListener("click", click);
function click() {
    x++;
    output.innerHTML = x;
}

document.getElementById("buy-cursor").addEventListener("click", buyCursor)
function buyCursor() {
    if (x >= 15) {
        x -= 15;
        cursors++;
        cursorOut.innerHTML = `${cursors} (${(cursors / 5).toFixed(1)}X/second)`;
        output.innerHTML = x;
    }
}

window.addEventListener("load", useCursors);
function useCursors() {
    if (cursors > 0) {
        click();
    }
    setTimeout(useCursors, 5000/cursors);
}

function getCookie(cname) {
    let name = cname + "=";
    let allCookies = decodeURIComponent(document.cookie);
    let cookieArray = allCookies.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}