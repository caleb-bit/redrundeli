let formOpen = false;

function isPopup(x) {
    for (let popup of popups) {
        if (popup == x) return true;
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
        if (isPopup(event.target)) {
            for (const popup of popups) {
                popup.style.display = 'none';
            }
        }
    }
)