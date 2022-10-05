// ---------- Utilities -----------------

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Getting the Timer
var memoryGameTimer = document.getElementById("memory_game_timer")

// When the user clicks on the button, open the modal




// --------------- Event Listerners ----------------

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// ------------- Game Initialization --------------------

const cardArray = [
    {
        name :'fries',
        img : '../Images/fries.png'
    },
    {
        name :'cheeseburger',
        img : '../Images/cheeseburger.png'
    },
    {
        name :'Ice-cream',
        img : '../Images/ice-cream.png'
    },
    {
        name :'Hotdog',
        img : '../Images/hotdog.png'
    },
    {
        name :'Milkshake',
        img : '../Images/milkshake.png'
    },
    {
        name :'Pizza',
        img : '../Images/pizza.png'
    },
    {
        name :'fries',
        img : '../Images/fries.png'
    },
    {
        name :'cheeseburger',
        img : '../Images/cheeseburger.png'
    },
    {
        name :'Ice-cream',
        img : '../Images/ice-cream.png'
    },
    {
        name :'Hotdog',
        img : '../Images/hotdog.png'
    },
    {
        name :'Milkshake',
        img : '../Images/milkshake.png'
    },
    {
        name :'Pizza',
        img : '../Images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid_memorygame')
const resultDisplay = document.querySelector('#results')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let memoryTimer = 23;
gameOver = false;




// --------------- Main Game Code --------------------0


// Setting up the game board
function createBoard()
{
    for(let i=0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '../Images/blank.svg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard) //Time starts onclick
        gridDisplay.appendChild(card)
    }
}


// Check Matching Cards
function checkMatch(){
    const cards = document.querySelectorAll('#grid_memorygame img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log("check for match!")
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', '../Images/blank.svg')
        cards[optionTwoId].setAttribute('src', '../Images/blank.svg')
        alert("You Have Clicked the Same Image!")
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', '../Images/White.png')
        cards[optionTwoId].setAttribute('src', '../Images/White.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', '../Images/blank.svg')
        cards[optionTwoId].setAttribute('src', '../Images/blank.svg')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length


    if (cardsWon.length == cardArray.length/2){
        modal.style.display = "block";
        gameOver = true;
    }
}


// Flipping Cards
function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

setInterval(() => {
    if (!gameOver && memoryTimer > 0){
        memoryTimer--;
        memoryGameTimer.innerText = memoryTimer + "s";
    }
}, 1000);




// Function Calls

createBoard()


