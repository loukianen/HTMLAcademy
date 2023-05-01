let slider = document.querySelector('.slider');
let activePhoto = slider.querySelector('.active-photo');
let previews = slider.querySelectorAll('a');
let currentActivePreview = slider.querySelector('.active-item');

for (let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = preview.href;
        currentActivePreview.classList.remove('active-item');
        preview.classList.add('active-item');
        currentActivePreview = preview;
    }
}
