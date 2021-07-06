let statusEl = document.getElementById("status-display")
let cardsEl = document.getElementById("cards-display")
let sumEl = document.getElementById("sum-display")
let playerEl = document.getElementById("player-display")

function getRandom(min, max) {
    min = Math.ceil(min);
    max =Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandom(1,11))

getRandom()

