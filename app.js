//Creating the array that will be the cards
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheesburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },    
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheesburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

//Shuffling the array
cardArray.sort(()=> 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        console.log(card, i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('check for match!');

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same card!');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == cardArray.length/2) {
        console.log('Congratulations, You have found them all!!');
        resultDisplay.textContent = 'Congratulations, You have found them all!!';
    }
    
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log('clicked', cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);
    
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}
