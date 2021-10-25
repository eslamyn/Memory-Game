const cards = document.querySelectorAll('.card');
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard() {
    if (lockBoard) return;
    this.classList.add('flip');
    if (!cardIsFlipped) {
        //first click
        cardIsFlipped = true;
        firstCard = this;
    } else {
        //second click
        cardIsFlipped = false;
        secondCard = this;
        //console.log(firstCard.dataset.game);
        //console.log(secondCard.dataset.game);
        //check for match
        if (firstCard.dataset.game === secondCard.dataset.game) {
            //match
            firstCard.removeEventListener('click', flipcard)
            secondCard.removeEventListener('click', flipcard)
        } else {
            //not match
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
                lockBoard = false;
            }, 1000);

        }
    }
}

(function shuffle() {
    cards.forEach(card => {
        let randomCards = Math.floor(Math.random() * 12);
        card.style.order = randomCards;
    });
})();


cards.forEach(card => card.addEventListener('click', flipcard));