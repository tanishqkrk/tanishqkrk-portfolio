const themeSwitch = document.querySelector('#checkbox');
themeSwitch.addEventListener('click', changeTheme);

function changeTheme(e) {
    document.body.classList.toggle('dark');
}

// Blob code

const blob = document.querySelectorAll('.random-blob');

let indexScroll = 0;
window.addEventListener('scroll', e => {
    if (document.body.getBoundingClientRect().top > indexScroll) {
        for (let i = 0; i < blob.length; i++) {
            blob[i].style.transform = 'translateY(30px) rotate(20deg)'
        }
    } else {
        for (let i = 0; i < blob.length; i++) {
            blob[i].style.transform = 'translateY(-30px) rotate(-20deg)';
        }
    }
    indexScroll = (document.body.getBoundingClientRect()).top;
})

// Hover Code

let cursorArea = document.querySelector('html');
let cursorSize = 10;
cursorArea.addEventListener('mousemove', e => {
    document.querySelector('.textCursor').style.top = `${e.clientY - cursorSize}px`
    document.querySelector('.textCursor').style.left = `${e.clientX - cursorSize}px`
})

let heroText = document.querySelector('.content__hero--title-text');
heroText.addEventListener('mousemove', e => {
    document.querySelector('.textCursor').style.width = '60px'
    document.querySelector('.textCursor').style.height = '60px'
    document.querySelector('.textCursor').style.border = '2px solid var(--primary-color)'
    document.querySelector('.textCursor').style.background = 'transparent';
    // document.querySelector('.textCursor').style.transition = '.5s';

})
heroText.addEventListener('mouseleave', e => {
    document.querySelector('.textCursor').style.width = '20px'
    document.querySelector('.textCursor').style.height = '20px'
    document.querySelector('.textCursor').style.background = 'var(--primary-color)'
    document.querySelector('.textCursor').style.border = 'none';
    // document.querySelector('.textCursor').style.transition = 'none';
})