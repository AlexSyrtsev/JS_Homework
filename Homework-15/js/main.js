var push = document.getElementById('push-me'),
    clock = document.getElementById('stop-watch');	

push.onclick = function(event) {
	if(clock.dataset.status == 'running') {
		letsPause();		    	
	} else {
		letsStart();	
	} 
}

var min = document.getElementById('minutes'),
    sec = document.getElementById('seconds'),
    mil = document.getElementById('milliseconds'),
    mm = 0,
    ss = 0,
    msms = 0;

function letsStart(){
  clock.dataset.status = 'running';
	push.innerText = 'PAUSE';

	if(!document.getElementById('push-to-refresh')) {
		createElements();
	}
	var arr = setInterval(function() {
		msms = msms + 1;
		mil.innerText = (msms > 9) ? msms : '0' + msms;
    		if (msms == 99) {
          msms = 0;
    			ss = ss + 1;
    			mil.innerText = msms;
    			sec.innerText = (ss > 9) ? ss : '0' + ss;	
    		} else if (ss == 59){
          ss = 0;
    			mm = mm + 1;
    			sec.innerText = ss;
   				min.innerText = (mm > 9) ? mm : '0' + mm;		
    		} else if (mm == 00 && ss == 05 && msms == 99) {
    			clearCounter();	
    	}

	}, 10);

	countIt = arr;
}

var countIt;

function letsPause(){
	clearInterval(countIt);
  
	clock.dataset.status = 'stopped';
	push.innerText = 'CONTINNUE';
}

function createElements(){
	clock.insertAdjacentHTML('afterEnd', '<div class="new-line"><input type="button" id="push-to-refresh" class="push-to-refresh" value="RESET">' + '<input type="button" id="results" class="results" value="SAVE"><div class="saved-ones" id="saved-ones"></div></div>');
	document.getElementsByClassName('results')[0].addEventListener('click', keepResults);
	document.getElementsByClassName('push-to-refresh')[0].addEventListener('click', letsRefresh);
}

var i = 1;

function keepResults(){
	document.getElementById('saved-ones').insertAdjacentHTML('beforeEnd', '<p>' + min.innerText + ' : ' + sec.innerText + ' : ' + mil.innerText+'</p>');
}

function letsRefresh(){
	mm = 0;
  ss = 0;
  msms = 0;

  clock.dataset.status = 'initial';
	push.innerText = 'START';
	clearInterval(countIt);
  
  min.innerText = '0' + mm;
  sec.innerText = '0' + ss;
	mil.innerText = '0' + msms;
	
	document.getElementsByClassName('results')[0].remove();
	document.getElementsByClassName('push-to-refresh')[0].remove();
  document.getElementsByClassName('saved-ones')[0].remove();
}

function clearCounter () {
  clearInterval(countIt);

  document.getElementsByClassName('results')[0].remove();
	document.getElementsByClassName('push-to-refresh')[0].remove();
  document.getElementsByClassName('saved-ones')[0].remove();
};

clock.style.display = "flex";
min.style = "border: solid black 2px";
min.style.margin = "4px";
sec.style = "border: solid black 2px";
sec.style.margin = "4px";
mil.style = "border: solid black 2px";
mil.style.margin = "4px";