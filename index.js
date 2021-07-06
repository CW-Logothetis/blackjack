const user = {
    name: "Chris",
    chips: 200
} 

let statusEl = document.getElementById("status-display")
let cardsEl = document.getElementById("cards-display")
let sumEl = document.getElementById("sum-display")
let playerEl = document.getElementById("player-display")
let startBtn = document.getElementById("start-btn")
let cardBtn = document.getElementById("card-btn")

let cards = []
let sum = 0

playerEl.textContent = `${user.name}: ${user.chips}€`


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

startBtn.addEventListener("click", function() {
    cards = []
    let firstCard = getRandom(1, 11)
    let secondCard = getRandom(1, 11)
    cards = [firstCard, secondCard]   
    sum = firstCard + secondCard
    // cardsEl.textContent = `${firstCard} ${secondCard}`
    cardsEl.textContent = " "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = sum
    if (sum <= 20) {
        statusEl.textContent = "Do you want to draw a new card?"
        }
        else if (sum === 21) {
            statusEl.textContent = "You've got Blackjack!"
        }
        else {
            statusEl.textContent = "You lose!"
        }
})

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }

cardBtn.addEventListener("click", function() {
    let newCard = getRandom(1, 11)
        // cardsEl.textContent += ` ${newCard}`
        // cards = 
       
        cards.push(newCard)
    cardsEl.textContent += newCard + " "
        sum += newCard
        sumEl.innerHTML = sum
    if (sum < 21) {
        statusEl.textContent = "Do you want to draw a new card?"
        }
        else if (sum === 21) {
            statusEl.textContent = "You've got Blackjack!"
        }
        else {
            statusEl.textContent = "You lose!"
        }
})