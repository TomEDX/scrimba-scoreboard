let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homeCount = 0;
let guestCount = 0;

console.log(homeEl);
console.log(guestEl);

function plusOneHome() {
    homeCount += 1;   
    console.log(homeCount);
    homeEl.innerText = homeCount;
}

function plusTwoHome() {
    homeCount += 2;   
    console.log(homeCount);
    homeEl.innerText = homeCount;
}

function plusThreeHome() {
    homeCount += 3;   
    console.log(homeCount);
    homeEl.innerText = homeCount;
}

function plusOneGuest() {
    guestCount += 1;   
    console.log(guestCount);
    guestEl.innerText = guestCount;
}

function plusTwoGuest() {
    guestCount += 2;   
    console.log(guestCount);
    guestEl.innerText = guestCount;
}

function plusThreeGuest() {
    guestCount += 3;   
    console.log(guestCount);
    guestEl.innerText = guestCount;
}