const themeSwitch = document.querySelector('#checkbox');
// console.log(rootBg, rootFt);
themeSwitch.addEventListener('click', changeTheme);

function changeTheme(e) {
    document.body.classList.toggle('dark');
}

// Blob code

let blob = document.querySelectorAll('.random-blob');

let indexScroll = 0;
window.addEventListener('scroll', e => {
    if (document.body.getBoundingClientRect().top > indexScroll) {
        for (let i = 0; i < blob.length; i++) {
            blob[i].style.transform = 'translateY(30px) rotate(20deg)'
            // blob[i].style.marginBottom = '100px';
        }
    } else {
        for (let i = 0; i < blob.length; i++) {
            blob[i].style.transform = 'translateY(-30px) rotate(-20deg)';
            // blob[i].style.marginBottom = '-100px';
            // blob[i].style.transform = 'scale(3)'
        }
    }
    indexScroll = (document.body.getBoundingClientRect()).top;
})

// Hover Code

let text = document.querySelector('.content__hero');
let button = document.querySelector('.content__hero--title-button');
text.addEventListener('mousemove', e => {
    document.querySelector('.textCursor').style.display = 'block';
    document.querySelector('.textCursor').style.top = `${e.clientY - 30}px`
    document.querySelector('.textCursor').style.left = `${e.clientX - 30}px`
})
text.addEventListener('mouseleave', e => {
    document.querySelector('.textCursor').style.display = 'none';
})
button.addEventListener('mousemove', e => {
    document.querySelector('.textCursor').style.display = 'block';
    document.querySelector('.textCursor').style.top = `${e.clientY - 30}px`
    document.querySelector('.textCursor').style.left = `${e.clientX - 30}px`
})
button.addEventListener('mouseleave', e => {
    document.querySelector('.textCursor').style.display = 'none';
})