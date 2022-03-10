const themeSwitch = document.querySelector('#checkbox');
// console.log(rootBg, rootFt);
themeSwitch.addEventListener('click', changeTheme);

function changeTheme(e){
    document.body.classList.toggle('dark');
}
