let formOpen = false;

function isButton(x) {
    for (let button of buttons) {
        if (button == x) return true;
    }
    return false;
}

const buttons = document.getElementsByClassName('category-btn');
const popups = document.getElementsByClassName('popup');

for (let button of buttons) {
    button.addEventListener(
        'click',
        function () {
            const id = button.id;
            document.getElementById(id + 'popup').style.display = 'block';
        }
    )
}

window.addEventListener(
    'click',
    function (event) {
        console.log(event.target);
        if (!isButton(event.target) && !isButton(event.target.parentElement)) {
            for (const popup of popups) {
                popup.style.display = 'none';
            }
        }

    }
)