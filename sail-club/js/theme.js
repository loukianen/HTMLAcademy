let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function () {
    document.body.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
};
themeButtonLight.onclick = function () {
    document.body.classList.remove('dark');
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
};

let fontButtonSerif = document.querySelector('.font-button-serif');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');

fontButtonSerif.onclick = function () {
    document.body.classList.add('serif');
    fontButtonSerif.classList.add('active');
    fontButtonSansSerif.classList.remove('active');
};
fontButtonSansSerif.onclick = function () {
    document.body.classList.remove('serif');
    fontButtonSerif.classList.remove('active');
    fontButtonSansSerif.classList.add('active');
};
