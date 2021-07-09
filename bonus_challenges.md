###############
### PHASE 1 ###
###############

USING REAL CARDS:
1. Start by making the getRandomCard() function return a random item/object from the "deck" array. 


This will affect the "cards" array as well, as it will now contain objects instead of plain numbers. Modify the renderGame() function so that it renders out the card images (check the images folder) instead of just plain numbers.

2. Next, you need to remember to remove the card we've drawn from the deck array.
Otherwise, you might end up drawing the same card twice. 

Hint: use .splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

THE getSum() FUNCTION
Create a function that returns the sum of your cards when you pass in your "cards" array.
It takes one argument (an array of cards) and returns a plain number (the sum of all the cards)
Use this getSum() function wherever you are assigning/re-assigning the "sum" variable.

THE DEALER:
Create a dealer feature. The dealer's cards should be rendered above yours.
You will need a variable to store the dealers cards (e.g. dealerCards), a variable
to store his sum (e.g. dealerSum), and HTML elements to render the cards and sum within.

1. First, draw one card to the dealer in the startGame() function, and modify the renderGame() function so that it renders out the dealers card. So the dealer's first card is drawn simultaneously with your first two cards.

2. Create a "Stand" button, which means that you are pleased with your cards and want the dealer to draw the rest of his cards. When you click on "Stand" the dealer must draw new cards until he reaches 17 or more. You can solve this in several different ways: e.g. by using recursion, or by using a while loop. (I am going to use recursion: https://scrimba.com/scrim/cy3JdQfK)

3. Once the dealer is done, create a function, declareWinner(), that declares a winner (Dealer or You). Render out a message that tells us who the winner is.

BETTING FEATURE:
Create a "BET" button that adds $10 from your chips to the table. Render out how much you have bet in a paragraph. You can click the "BET" button multiple times before you start the game. But you're limited by how many chips you have in your "player" object. You can only bet before you have gotten your cards.

Modify the declareWinner() function to either give your back your bet (tie), give you back 2x your bet (you won), or not give you back anything at all (you lost).

RESET GAME FEATURE:
Now, we want to be able to play several times without having to refresh the page to reset the game (as that resets our chips back to 200 every single time). So instead, we want to create a "RESET GAME" button that resets the game state by resetting all necessary variables, and also bring the table back to its start state (removing the cards, sum, bet, etc). However, the chips should be persisted.

PS: At this point, it makes sense to rename "START GAME" to "DEAL CARDS".

###############
### PHASE 2 ###
###############

GENERAL IMPROVEMENTS:

* Fixup the broken styling
* Make it your own design
* Require betting before dealing cards
* Improve the UX
    * Hide/disable inactive buttons
    * Visualize the chips
    * Visualize winning/losing in a better way
* Create different types of chips (1, 5, 10, 20, 50, etc)
* Clean up the code
    * Use const
    * Can you make it DRYer
    * Make it more readable/understandable?
* Create a "Join Game" feature (add name + chips)


MORE BLACKJACK FEATURES:

* Natural vs unnatural Blackjack ("ace, 10" vs "7, 9, 5")

* Ace 1 vs 11 feature. Make the ace count as either 1 or 11. One way could be to show both options as long as none of them make the hand tip 21 (in which case you will need to use the ace as 1)
E.g: 7 + ace = "8 (18)"

* Double feature. It allows you to double after getting your first two cards
Note: you're only allowed to get one card after doubling.

* Split feature. Gives you the ability to split your hand into two separate hands if you start with a pair. Means you need to double your bet to support both hands.