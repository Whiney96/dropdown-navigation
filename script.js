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