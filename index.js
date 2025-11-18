var homeScore = document.getElementById("home-score")

var guestScore = document.getElementById("guest-score")

const resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", function(){
    homeScore.textContent = "0"
    guestScore.textContent = "0"
})



function plusOneHome() {
    homeScore.textContent = parseInt(homeScore.textContent) + 1
};

function plusTwoHome() {
    homeScore.textContent = parseInt(homeScore.textContent) + 2
};

function plusThreeHome() {
    homeScore.textContent = parseInt(homeScore.textContent) + 3
};

function plusOneGuest() {
    guestScore.textContent = parseInt(guestScore.textContent) + 1
};

function plusTwoGuest() {
    guestScore.textContent = parseInt(guestScore.textContent) + 2
};

function plusThreeGuest() {
    guestScore.textContent = parseInt(guestScore.textContent) + 3
};

