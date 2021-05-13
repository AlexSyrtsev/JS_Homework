var create = document.getElementById('push-me');

create.addEventListener('click', createLine);

function createLine() {
  var tbody = document.getElementsByClassName('events')[0]; // если добавим индекс -- получим первое совпадение;
  var lineAdd = document.createElement('tr'); // создаём элемент в вакууме;
  var onTop = tbody.getElementsByClassName('events-line')[0];
  
  lineAdd.className = 'events-line'; // [правка: новая строка кода. сначала работаем с классом -- добавляем его];
  lineAdd.innerHTML = '<td></td> <td></td> <td></td> </tr>'; // [правка: (устанавливаем содержимое) внутрь класса];
  tbody.insertBefore(lineAdd, onTop); // вставляем в начало;
}

var tbody = document.getElementById('parent');

tbody.onclick = function(e) {
  var pointed = e.target;

  if (pointed.tagName === 'TD' && pointed.id !== 'push-me'){
    showCell(pointed);
  }
  
  return;

};

var cellPoint;

function showCell(e) {
  var cellPoint = e;
  var oldValue = cellPoint.innerHTML; // [правки -- сохранили иннер-эйчитиэмэль ячейки];

  if (cellPoint == 'TH'){
    document.querySelector('#cell');
    
  } else {
    cellPoint.innerHTML = '<input id="cell">';
    document.querySelector('#cell').focus();
    
  }

  var showHide;
  var input = document.querySelector('#cell');

  input.value = oldValue; // [правки -- сохранили старое значение]
  
  cell.onblur = function() {

    if (!input.value){ // метод для получения значения из поля ввода;
      cell.remove(); // прячем ячейку без фокуса;

    } else if (!showHide) {
      cellPoint.innerHTML = input.value;
    }

  }
  
  cell.onkeyup = function (event) { // [правка: новое событие по нажатию на Enter]
    if (event.keyCode === 13) {
        cell.blur();
    }
  }

};
