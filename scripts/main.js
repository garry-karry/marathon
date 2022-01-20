const likeImageEl = document.querySelectorAll('.js-like-image');

const emptyLikeImageUrl = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg';
const filledLikeImageUrl = 'https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg';

likeImageEl[0].addEventListener('click', (event) => {
    const textCountLikeEl = event.target.parentElement.querySelector('.js-count');
    const counter = textCountLikeEl.textContent;
    const numberOfLikesEl = counter.slice(0,2);

    if (event.target.src === emptyLikeImageUrl){
    event.target.src = filledLikeImageUrl;
    textCountLikeEl.textContent = `${+numberOfLikesEl + 1} отметки “Нравится”`;
}
    else {
        event.target.src = emptyLikeImageUrl;
        textCountLikeEl.textContent = `${+numberOfLikesEl - 1} отметки “Нравится”`;
    }
});

likeImageEl[1].addEventListener('click', (event) => {
    const textCountLikeEl = event.target.parentElement.querySelector('.js-count');
    const counter = textCountLikeEl.textContent;
    const numberOfLikesEl = counter.slice(0,2);


    if (event.target.src === emptyLikeImageUrl){
    event.target.src = filledLikeImageUrl;
    textCountLikeEl.textContent = `${+numberOfLikesEl + 1} отметки “Нравится”`;
}
    else {
        event.target.src = emptyLikeImageUrl;
        textCountLikeEl.textContent = `${+numberOfLikesEl - 1} отметки “Нравится”`;
    }
});

likeImageEl[2].addEventListener('click', (event) => {
    const textCountLikeEl = event.target.parentElement.querySelector('.js-count');
    const counter = textCountLikeEl.textContent;
    const numberOfLikesEl = counter.slice(0,2);

    if (event.target.src === emptyLikeImageUrl){
    event.target.src = filledLikeImageUrl;
    textCountLikeEl.textContent = `${+numberOfLikesEl + 1} отметки “Нравится”`;
}
    else {
        event.target.src = emptyLikeImageUrl;
        textCountLikeEl.textContent = `${+numberOfLikesEl - 1} отметки “Нравится”`;
    }
});

likeImageEl[3].addEventListener('click', (event) => {
    const textCountLikeEl = event.target.parentElement.querySelector('.js-count');
    const counter = textCountLikeEl.textContent;
    const numberOfLikesEl = counter.slice(0,2);

    if (event.target.src === emptyLikeImageUrl){
    event.target.src = filledLikeImageUrl;
    textCountLikeEl.textContent = `${+numberOfLikesEl + 1} отметки “Нравится”`;
}
    else {
        event.target.src = emptyLikeImageUrl;
        textCountLikeEl.textContent = `${+numberOfLikesEl - 1} отметки “Нравится”`;
    }
});
