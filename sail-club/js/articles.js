let shortArticles = document.querySelectorAll('.blog-article.short');

for (let article of shortArticles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function () {
        article.classList.remove('short');
    }
}