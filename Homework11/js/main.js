var create = document.getElementById('push-me');

create.addEventListener('click', createLine);

function createLine() {
  var tbody = document.getElementsByClassName('events')[0]; // если добавим индекс -- получим первое совпадение;
  var lineAdd = document.createElement('tr'); // создаём элемент в вакууме;
  var onTop = tbody.getElementsByClassName('events-line')[0];
  
  lineAdd.innerHTML = '<tr class="events-line"> <td></td> <td></td> <td></td> </tr>'; // устанавливаем содержимое;
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

  if (cellPoint == 'TH'){
    document.querySelector('#cell');
    
  } else {
    cellPoint.innerHTML = '<input id="cell">';
    document.querySelector('#cell').focus();
    
  }

  var showHide;
  var input = document.querySelector('#cell');
  
  cell.onblur = function() {

    if (!input.value){ // метод для получения значения из поля ввода;
      cell.remove(); // прячем ячейку без фокуса;

    } else if (!showHide) {
      cellPoint.innerHTML = input.value;
    }

  }

};
