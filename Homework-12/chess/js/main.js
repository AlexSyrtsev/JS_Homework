var x = document.getElementById('X');
var y = document.getElementById('Y');
var block = document.getElementsByClassName('form')[0];
var push = document.getElementById('push');
var table = document.getElementsByClassName('table')[0];

push.onclick = function (event) {
  if (+x.value > 10 || +x.value < 1 || isNaN(+x.value)) {
    alert('Х некорректен');
    x.value = '';

  } else if (+y.value > 10 || +y.value < 1 || isNaN(+y.value)) {
    alert('Y некорректен');
    y.value = '';
  }

}

push.addEventListener('click', create);

function create() {
  table.innerText = '';

  for (var vert = 0; vert < Number(y.value); vert++) {
    var addTr = document.createElement('tr');

    for (var hor = 0; hor < Number(x.value); hor++) {
      var addTd = document.createElement('td');

      if ((hor + vert) & 1) {
        addTd.classList.add('td-color');
      }
      addTr.append(addTd);
    }

    table.append(addTr);
  }

}