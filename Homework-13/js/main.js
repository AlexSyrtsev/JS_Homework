var button = document.getElementsByClassName('first-push')[0],
	arr = 'Data';

button.onclick = function(event) {
	if (JSON.parse(localStorage.getItem(arr))) {
		display(JSON.parse(localStorage.getItem(arr)));
	} else {
		ask();
	}
}

function ask() {
	var ajax = new XMLHttpRequest();

	ajax.open('GET', 'https://reqres.in/api/users?page=2'); 
	// ajax.open('GET', 'https://reqres.in/apiiiii/users?page=2'); // срабатывает 
	// ajax.open('GET', 'https://reqress.in/api/users?page=2'); // срабатывает с задержкой

	ajax.send();

	ajax.onload = function() {
		var statusType = Math.round(this.status / 100);

		if (ajax.status == 200) {
			display(JSON.parse(ajax.response).data);
		} else {
			mistake();
		}
		console.log((statusType === 2) ? JSON.parse(ajax.response).data : ajax.status);
	};

	ajax.onerror = function() {
		mistake();
		console.error(ajax.status);
	};

	ajax.onloadend = function() {
		console.log('AJAX-запрос завершён.');
	};
}

function mistake() {
	button.getElementsByClassName('second-push')[0].setAttribute('disabled', '');
	document.getElementsByClassName('left-one')[0].innerHTML = '<p class="mistake">Ошибка получения данных!</p>'
}

function get(e) {
	document.getElementsByClassName('one-guy');
	document.getElementsByClassName('guy-info');
	var i = 0;

	for (; i < document.getElementsByClassName('one-guy').length;) {
		document.getElementsByClassName('one-guy')[i];
		if (e.target != document.getElementsByClassName('one-guy')[i]) {
			document.getElementsByClassName('one-guy')[i].classList.remove('active');
		} else {
			document.getElementsByClassName('one-guy')[i].classList.add('active');
			var i;
			var j = 0;

			for (; j < document.getElementsByClassName('guy-info').length;) {
				document.getElementsByClassName('guy-info')[j];
				if (j == i) {
					document.getElementsByClassName('guy-info')[j].classList.remove('invisible');
				} else {
					document.getElementsByClassName('guy-info')[j].classList.add('invisible');
				}

				j++;
			}
		}

		i++;
	}
}

function display(guys) {
	document.getElementsByClassName('info-container');
	document.getElementsByClassName('all-guys');
	var index = 0;

	for (; index < guys.length;) {
		document.getElementsByClassName('all-guys')[0].innerHTML += '<div class="one-guy">User ' + (index + 1) + '</div>';
		document.getElementsByClassName('all-guys')[0].firstElementChild.classList.add('active');
		document.getElementsByClassName('info-container')[0].innerHTML +=
			'<div class="guy-info invisible"><div class="guy-images"><img src="' + guys[index].avatar + '" alt="' + (index + 1) + '" /></div>' + 
			'<div class="guy-names"><div>First Name: ' + guys[index].first_name + 
			'<br>' + 'Last Name: ' + guys[index].last_name + 
			'<br>' + 'E-mail: ' + guys[index].email + 
			'<br>' + 'ID-number: ' + guys[index].id + '</div></div>';
		document.getElementsByClassName('info-container')[0].firstElementChild.classList.remove('invisible');
		
		index++;
	}

	document.getElementsByClassName('all-guys')[0].onclick = get;
	button.getElementsByClassName('second-push')[0].setAttribute('disabled', '');
	localStorage.setItem(arr, JSON.stringify(guys));
}