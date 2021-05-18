var button = document.getElementById('button');
var container = document.getElementById('container');

var newParagraph = document.createElement('p');
var newParagraph2 = document.createElement('p');

newParagraph.innerHTML = '<span>Привет, это <a href="https://www.facebook.com">Ссылка раз</a> и <a href="https://www.facebook.com">Ссылка два</a></span>';

newParagraph2.innerHTML = '<span>Привет, это <a href="http://google.by">Ссылка Три</a> и <a href="https://vk.com">Ссылка четыре</a></span>'

container.appendChild(newParagraph);
container.appendChild(newParagraph2);

/// Установим событие клика на кнопку:
button.addEventListener('click', makeChanges);

function makeChanges() {
    for (var i = 0; i < newParagraph.getElementsByTagName('a').length; i++) {
        newParagraph.getElementsByTagName('a')[i].classList.add('changes');
    }
}

/// Очистим локалсторэдж при загрузке страницы:
function deleteValue() {
    localStorage.clear();
};
  
window.onload = deleteValue;

///  Установим событие клика на второй абзац способом onclick:
newParagraph2.onclick = function(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault(); // Отменим браузерное поведение элемента

        // Выводим в alert значения атрибута href:
        if (localStorage.getItem(event.target.innerHTML) === null) {
            var alarm = event.target.getAttribute('href');
            alert(alarm);

        } else {
            return;
        }

    }
}