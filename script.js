const themeSwitch = document.querySelector('#checkbox');
// console.log(rootBg, rootFt);
themeSwitch.addEventListener('click', changeTheme);

function changeTheme(e){
    document.body.classList.toggle('dark');
}

// Blob code

let blob = document.querySelectorAll('.random-blob');

let indexScroll = 0;
window.addEventListener('scroll', e=>{
    if(document.body.getBoundingClientRect().top > indexScroll){
        for(let i = 0; i<blob.length; i++){
            blob[i].style.transform = 'translateY(20px) rotate(20deg)'
            // blob[i].style.transform = 'scale(2)'
        }
    }
    else{
        for(let i = 0; i<blob.length; i++){
            blob[i].style.transform = 'translateY(-20px) rotate(-20deg)';
            // blob[i].style.transform = 'scale(3)'
        }
    }
    indexScroll = (document.body.getBoundingClientRect()).top;
})
