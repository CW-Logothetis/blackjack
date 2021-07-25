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

// let user = {
//     getInput: function() {
//       this.userInput = document.getElementById('enter-player-name').value;
//     //   document.getElementById("output").innerHTML = this.userInput;
//     }
//   }

let player = {
    name: "Chris",
    chips: 200
}

let playerCards = []
let playerSum = 0
let playerBet = 0
let hasBlackJack = false
let playerAlive = false

let dealerCards = []
let dealerSum = 0
let dealerAlive = false

let message = ""
let messageEl = document.getElementById("message-el")

let playerNameEl = document.getElementById("player-el")
let playerSumEl = document.getElementById("sum-el")
let playerCardsEl = document.getElementById("cards-el")

let dealerCardsEl = document.getElementById("dealer-el")
let dealerSumEl = document.getElementById("sum-dealer-el")

let betEl = document.getElementById("bet-el")
// let modalBank = document.getElementById("bank")

window.onload = function() {
    betModal.style.display = "block"
  }

// hideBet()
hidePlayAgain()
hideNewCard()
hideStand()
// hideBank()


function renderPlayer() {
    playerNameEl.textContent = "Bank: $" + player.chips
}
renderPlayer()

// function renderBank() {
//     modalBank.textContent = "Bank: $" + player.chips
// }

// renderBank()

function getRandomCard() {
    let randomCardIndex = Math.floor( Math.random()*deck.length )
    deck.splice(randomCardIndex, 1)
    return deck[randomCardIndex] 
}

function getSum(cardsArray) {
    let cardsSum = 0
    for (let i = 0; i < cardsArray.length; i++) {
        cardsSum += cardsArray[i].numValue
    } return cardsSum
}

function dealCards() {
    playerAlive = true
    // hasGameStarted = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    playerSum = getSum(playerCards)
    
    dealerAlive = true
    dealerCards = [getRandomCard()]
    dealerSum = getSum(dealerCards)
    renderGame()
    hideDealCards()
    // hideBet()
    showNewCard()
    showStand()
    showBank()
    betModal.style.display = "none"
    console.log(firstCard)
}



function renderGame() {
    //dealer
    dealerCardsEl.textContent = ""
    for (let i = 0; i < dealerCards.length; i++) {
        let path = `images/${dealerCards[i].value + dealerCards[i].suit}.png`
        dealerCardsEl.innerHTML += `
            <img src="${path}" class="card-img">
        `
    }
    dealerSumEl.innerHTML = dealerSum + " Dealer"
    dealerSumEl.innerHTML = `<span class="dealer-sum-circle">${dealerSum}</span> Dealer`
    
//     dealerSumEl.innerHTML =
//     `<div class="circle">
//         <div class="circle__inner">
//             <div class="circle__wrapper">
//                     <span class="circle__content">${dealerSum}</span>
//             </div>
//         </div>
//     </div>
// Dealer`
    
    
    
    
    //player
    playerCardsEl.textContent = ""
    for (let i = 0; i < playerCards.length; i++) {
        let path = `images/${playerCards[i].value + playerCards[i].suit}.png`
        playerCardsEl.innerHTML += `
            <img src="${path}" class="card-img">
        `
    }
    playerSumEl.innerHTML = `<span class="player-sum-circle">${playerSum}</span> ${player.name}`

    if (playerSum <= 20) {
        message = ""

    } else if (playerSum === 21) {
        
        hasBlackJack = true
        playerAlive = false
        hideShowButtons()
        winnerModal.style.display = "block"
        message = "You've got Blackjack!"
        
    } else {
        
        playerAlive = false
        hideShowButtons()
        winnerModal.style.display = "block"
        message = "Dealer Wins!"
        
    }
    messageEl.textContent = message
}

function newCard() {
    if (playerAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        playerCards.push(card)
        playerSum = getSum(playerCards)
        renderGame()    
    }
}

function dealerCard() {
        
        // let newDealerCard = getRandomCard()
        let card = getRandomCard()
        // dealerAlive = true
        // dealerCards.push(newDealerCard)
        dealerCards.push(card)
        dealerSum = getSum(dealerCards)
        renderGame()
        
    if (dealerSum < 17) {
        dealerCard()
    } 
    else {
        declareWinner()
        hideShowButtons()
    } 
    
}

function stand() {
    if (playerAlive) {
    dealerCard()
    }
}

function changeBackground() {
    document.body.style.backgroundImage = "url('images/table-wood-opacity.png')";
}

function revertBackground() {
    document.body.style.backgroundImage = "url('images/table-wood.png')";
}

function declareWinner() {
if (playerSum > dealerSum || dealerSum > 21) {
    winnerModal.style.display = "block"
    messageEl.textContent = `${player.name} Wins!`
    player.chips = player.chips + (playerBet * 2)
    renderPlayer()
    
    
    } else if (dealerSum > playerSum) {
        winnerModal.style.display = "block"
        messageEl.textContent= "Dealer wins!"
        
    }
    else {
        winnerModal.style.display = "block"
        messageEl.textContent = "It's a tie."
        player.chips += playerBet
        renderPlayer()
        
    }
    
    
    // playerAlive = false
    // playerNameEl.textContent = player.name + ": $" + player.chips
    // betEl.textContent = "Your bet: $" + playerBet
}

// function bet() {
//     if (dealerAlive === false && player.chips >= 10) {
//         player.chips -= 10
//         playerNameEl.textContent = player.name + ": $" + player.chips
//         playerBet += 10 
//         betEl.textContent = "Your bet: $" + playerBet
//         // renderPlayer() from Per why?
//     }
// }

// let betAll = document.getElementById("all-in")
let bet05 = document.getElementById("c05")
let bet10 = document.getElementById("c10")
let bet25 = document.getElementById("c25")
let bet50 = document.getElementById("c50")
let bet100 = document.getElementById("c100")

// betAll.addEventListener("click", function() {
//     if (dealerAlive === false && player.chips >= 10) {
        // player.chips -= 5
        // playerBet = player.chips
        // playerNameEl.textContent = player.name + ": $" + player.chips
        // playerBet = player.chips
//         betEl.textContent = "Your bet: $" + playerBet
//     }
// })

bet05.addEventListener("click", function() {
    if (dealerAlive === false && player.chips >= 5) {
        player.chips -= 5
        playerNameEl.textContent = "Bank: $" + player.chips
        playerBet += 5 
        betEl.innerHTML = "Bet: $" + playerBet
        modalBank.textContent = "Bank: $" + player.chips
        // renderPlayer() from Per why?
    }
})

bet10.addEventListener("click", function() {
    if (dealerAlive === false && player.chips >= 10) {
        player.chips -= 10
        playerNameEl.textContent = "Bank: $" + player.chips
        playerBet += 10
        betEl.textContent = "Bet: $" + playerBet
        modalBank.textContent = "Bank: $" + player.chips
        // renderPlayer() from Per why?
    }
})

bet25.addEventListener("click", function() {
    if (dealerAlive === false && player.chips >= 25) {
        player.chips -= 25
        playerNameEl.textContent = "Bank: $" + player.chips
        playerBet += 25
        betEl.textContent = "Bet: $" + playerBet
        modalBank.textContent = "Bank: $" + player.chips
        // renderPlayer() from Per why?
    }
})

bet50.addEventListener("click", function() {
    if (dealerAlive === false && player.chips >= 50) {
        player.chips -= 50
        playerNameEl.textContent = "Bank: $" + player.chips
        playerBet += 50
        betEl.textContent = "Bet: $" + playerBet
        modalBank.textContent = "Bank: $" + player.chips
        // renderPlayer() from Per why?
    }
})

bet100.addEventListener("click", function() {
    if (dealerAlive === false && player.chips >= 100) {
        player.chips -= 100
        playerNameEl.textContent = "Bank: $" + player.chips
        playerBet += 100
        betEl.textContent = "Bet: $" + playerBet
        modalBank.textContent = "Bank: $" + player.chips
        // renderPlayer() from Per why?
    }
})

function hideShowButtons() {
        hideNewCard()
        hideStand()
        showPlayAgain()
}

// function hideBet() {
//     document.getElementById("bet").style.visibility = "hidden"
// }

// function showBet() {
//     document.getElementById("bet").style.visibility = "visible"
// }

function hideDealCards() {
    document.getElementById("deal-cards").style.visibility = "hidden"
}

function showDealCards() {
    document.getElementById("deal-cards").style.visibility = "visible"
}

function hideNewCard() {
    document.getElementById("new-card").style.visibility = "hidden"
}

function showNewCard() {
    document.getElementById("new-card").style.visibility = "visible"
}

function hideStand() {
    document.getElementById("stand").style.visibility = "hidden"
}

function showStand() {
    document.getElementById("stand").style.visibility = "visible"
}

function hidePlayAgain() {
    document.getElementById("play-again").style.visibility = "hidden"
        // betModal.style.display = "block"
}

function showPlayAgain() {
    document.getElementById("play-again").style.visibility = "visible"
}

function hideBank() {
    document.getElementById("player-el").style.visibility = "hidden"
}

function showBank() {
    document.getElementById("player-el").style.visibility = "visible"
}

function playAgain() {
    playerCards = []
    playerSum = 0
    playerCardsEl.innerHTML = ""
    playerSumEl.textContent = ""

    dealerCards = []
    dealerSum = 0
    dealerCardsEl.innerHTML = ""
    dealerSumEl.textContent = ""

    messageEl.textContent = "Place a new bet"

    playerBet = 0
    betEl.textContent = ""
    
    dealerAlive = false
    // hasBlackJack = false
    // playerAlive = false
    
    // showBet()
    showDealCards()
    hidePlayAgain()
    // revertBackground()
    betModal.style.display = "block"
    // renderGame()
}

// MODALS

// a. Bet Modal

// Get the modal
let betModal = document.getElementById("bet-overlay");

// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   betModal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target !== modal) {
//     modal.style.display = "none";
//   }
// }

//b. Win Lose Modal

// Get the modal
let winnerModal = document.getElementById("winner-overlay");

// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   winModal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target !== modal) {
//     modal.style.display = "none";
//   }
// }