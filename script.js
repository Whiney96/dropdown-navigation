function show() {
    let others = document.getElementById("features");

    if (others.style.display == "block") {
        others.style.display = "none";
    } else {
        others.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.features-btn')) {
        document.getElementById('features')
            .style.display = "none";
    }
}

const dropdown2 = document.querySelector('#company-dropdown');
function handleClick() {
    if(dropdown2.style.display == 'block') {
        dropdown2.style.display = 'none'
    } else {
        dropdown2.style.display = 'block'
    }
}
document.getElementById('company').addEventListener('click', handleClick)