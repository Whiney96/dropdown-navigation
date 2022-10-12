// the first dropdown

let dropdown1 = document.querySelector("#features");
function show() {
    if (dropdown1.style.display == "block") {
        dropdown1.style.display = "none";
        document.getElementById('arrow').src="/images/icon-arrow-down.svg"
    } else {
        dropdown1.style.display = "block";
        document.getElementById('arrow').src="/images/icon-arrow-up.svg"
    }
}
document.getElementById('features-btn').addEventListener('click', show)

// the second dropdown

const dropdown2 = document.querySelector('#company-dropdown');
function handleClick() {
    if(dropdown2.style.display == 'block') {
        dropdown2.style.display = 'none';
        document.getElementById('arrow2').src="/images/icon-arrow-down.svg"
    } else {
        dropdown2.style.display = 'block';
        document.getElementById('arrow2').src="/images/icon-arrow-up.svg"
    }
}
document.getElementById('company').addEventListener('click', handleClick)

// the menu icon

const menuIcon = document.querySelector('#menu-icon');
const imgSrc = document.getElementById('menu-icon').src="/images/icon-menu.svg";
const hiddenNav = document.getElementById('mobile-nav');

function iconChange() {
    if(hiddenNav.style.display == 'none') {
        hiddenNav.style.display = 'block';
        document.getElementById('menu-icon').src="/images/icon-close-menu.svg";
    } else {
        hiddenNav.style.display = 'none';
        document.getElementById('menu-icon').src="/images/icon-menu.svg";
    }
}
document.getElementById('menu-icon').addEventListener('click', iconChange);