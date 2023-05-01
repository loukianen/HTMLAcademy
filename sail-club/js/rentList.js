let cards = document.querySelector('.cards');
let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');

gridButton.onclick = function () {
    cards.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
};

listButton.onclick = function () {
    cards.classList.add('list');
    gridButton.classList.remove('active');
    listButton.classList.add('active');
};