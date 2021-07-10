let deck = [
    { value: "A", suit: "S", numValue: 11},
    { value: "A", suit: "D", numValue: 11},
    { value: "A", suit: "C", numValue: 11},
    { value: "A", suit: "H", numValue: 11},
    { value: "2", suit: "S", numValue: 2},
    { value: "2", suit: "D", numValue: 2},
    { value: "2", suit: "C", numValue: 2},
    { value: "2", suit: "H", numValue: 2},
    { value: "3", suit: "S", numValue: 3},
    { value: "3", suit: "D", numValue: 3},
    { value: "3", suit: "C", numValue: 3},
    { value: "3", suit: "H", numValue: 3},
    { value: "4", suit: "S", numValue: 4},
    { value: "4", suit: "D", numValue: 4},
    { value: "4", suit: "C", numValue: 4},
    { value: "4", suit: "H", numValue: 4},
    { value: "5", suit: "S", numValue: 5},
    { value: "5", suit: "D", numValue: 5},
    { value: "5", suit: "C", numValue: 5},
    { value: "5", suit: "H", numValue: 5},
    { value: "6", suit: "S", numValue: 6},
    { value: "6", suit: "D", numValue: 6},
    { value: "6", suit: "C", numValue: 6},
    { value: "6", suit: "H", numValue: 6},
    { value: "7", suit: "S", numValue: 7},
    { value: "7", suit: "D", numValue: 7},
    { value: "7", suit: "C", numValue: 7},
    { value: "7", suit: "H", numValue: 7},
    { value: "8", suit: "S", numValue: 8},
    { value: "8", suit: "D", numValue: 8},
    { value: "8", suit: "C", numValue: 8},
    { value: "8", suit: "H", numValue: 8},
    { value: "9", suit: "S", numValue: 9},
    { value: "9", suit: "D", numValue: 9},
    { value: "9", suit: "C", numValue: 9},
    { value: "9", suit: "H", numValue: 9},
    { value: "10", suit: "S", numValue: 10},
    { value: "10", suit: "D", numValue: 10},
    { value: "10", suit: "C", numValue: 10},
    { value: "10", suit: "H", numValue: 10},
    { value: "J", suit: "S", numValue: 10},
    { value: "J", suit: "D", numValue: 10},
    { value: "J", suit: "C", numValue: 10},
    { value: "J", suit: "H", numValue: 10},
    { value: "Q", suit: "S", numValue: 10},
    { value: "Q", suit: "D", numValue: 10},
    { value: "Q", suit: "C", numValue: 10},
    { value: "Q", suit: "H", numValue: 10},
    { value: "K", suit: "S", numValue: 10},
    { value: "K", suit: "D", numValue: 10},
    { value: "K", suit: "C", numValue: 10},
    { value: "K", suit: "H", numValue: 10},
]

let player = {
    name: "Per",
    chips: 200
}

let playerCards = []
let playerSum = 0
let dealer = []
let dealerSum = 0

let hasBlackJack = false
let playerAlive = false
let dealerAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let playerSumEl = document.getElementById("sum-el")
let dealerSumEl = document.getElementById("sum-dealer-el")
let playerCardsEl = document.getElementById("cards-el")
let dealerEl = document.getElementById("dealer-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    // let randomCard = Math.floor( Math.random()*deck.length )
    // deck.splice(randomCard, 1)
    // return deck[randomCard]
    // From Per
    let randomCardIndex = Math.floor( Math.random()*52 )
    deck.splice(randomCardIndex, 1)
    return deck[randomCardIndex] 
}

function getSum(cardsArray) {
    let cardsSum = 0
    for (let i = 0; i < cardsArray.length; i++) {
        cardsSum += cardsArray[i].numValue
    }
    return cardsSum
}

function startGame() {
    playerAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    playerSum = getSum(playerCards)
    
    dealerAlive = true
    let dealerFirst = getRandomCard()
    dealer = [dealerFirst]
    dealerSum = getSum(dealer)
    // console.log(dealerFirst)
    renderGame()
}

function renderGame() {
    playerCardsEl.textContent = ""
    for (let i = 0; i < playerCards.length; i++) {
        let path = `images/${playerCards[i].value + playerCards[i].suit}.png`
        playerCardsEl.innerHTML += `
            <img src="${path}" class="card-img">
        `
    }
    dealerEl.textContent = ""
    for (let i = 0; i < dealer.length; i++) {
        let path = `images/${dealer[i].value + dealer[i].suit}.png`
        dealerEl.innerHTML += `
            <img src="${path}" class="card-img">
        `
    }


    playerSumEl.textContent = "Sum: " + playerSum
    if (playerSum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (playerSum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        playerAlive = false
    }
    messageEl.textContent = message
    dealerSumEl.textContent = "Sum: " + dealerSum
    
}


function newCard() {
    if (playerAlive === true && hasBlackJack === false) {
        let newPlayerCard = getRandomCard()
        // sum += card
        playerCards.push(newPlayerCard)
        playerSum = getSum(playerCards)
        renderGame()        
    }
}

function DealerCard() {
        
        let newDealerCard = getRandomCard()
        dealer.push(newDealerCard)
        dealerSum = getSum(dealer)
        renderGame()
        
    if (dealerSum < 17) {
        DealerCard()
    } 
    else {
        message = "MESSAGE"
    }
    messageEl.textContent = message   
    declareWinner()
}

function stand() {
    DealerCard()
}


function declareWinner() {
// if dealerSum is more than playerSum, dealer wins
// else player wins
if (dealerSum < 17 && dealerSum >= playerSum) {
    message = "Dealer Wins!"
} else {
    message = `${player.name} Wins!`
}
}