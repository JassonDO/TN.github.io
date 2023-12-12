document.addEventListener('DOMContentLoaded', function () {
    const candles = document.querySelector('.candles');
    const cake = document.querySelector('.cake');
    const message = document.querySelector('.message');

    setTimeout(() => {
        candles.style.animation = 'candles-animation 2s forwards';
    }, 500);

    setTimeout(() => {
        cake.style.animation = 'cake-animation 2s forwards';
    }, 1000);

    setTimeout(() => {
        message.style.animation = 'message-animation 2s forwards';
    }, 1500);
});