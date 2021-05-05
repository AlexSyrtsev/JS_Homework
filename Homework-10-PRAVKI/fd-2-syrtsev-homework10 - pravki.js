// Задание 1 -- добавлена функция-обёртка //

// СТАЛО
var arr = ['John', 'Paul', 'George', 'Ringo'];

function arrayOfObjects() {
  var newArr = arr.map(function (name) {
    return {name: name};
  });

  return newArr;
}

console.log( arrayOfObjects(arr) );

// БЫЛО
var arr = ['John', 'Paul', 'George', 'Ringo'];

var newArr = arr.map(function (name) {
    return {name: name};
});

console.log( newArr );


// Задание 2 -- добавлена функция-обёртка //

// СТАЛО
var numbers = ['00', '13', '24'];

function arrayToString() {
  var time = numbers.reduce(function(prev, curr) {
      return prev + ':' + curr;
  }, 'Текущее время ');

  return time;
}

console.log( arrayToString(numbers) );

// БЫЛО
var numbers = ['00', '13', '24'];

var time = numbers.reduce(function(prev, curr) { // схлопнем элементы массива редьюсом;
    return prev + ':' + curr;
}, 'Текущее время '); // зададим initialValue;
  
console.log( time );


// Задание 4 -- убраны пустые элементы из результата благодаря
// новому регулярному выражению для split и...

// СТАЛО
function howMuch(letters) {
  var text = letters.split(/[.!?]+/, 3); // ... тройке, которая выводит три предложения и не выводит "пустоту";

  for (var i = 0; i < text.length; i++){
      console.log(text[i] + ' : Letters quantity is : ' + text[i].split(' ').join('').split(',').join('').length);
  };
};

var letters = 'Привет, студент! Студент... Как дела, студент?';

console.log(howMuch(letters));

// БЫЛО
function howMuch(letters) {
    var text = letters.split(/[a-z]*[?!.]/g);

    for (var i = 0; i < text.length; i++){
        console.log(text[i] + ' : Letters quantity is : ' + text[i].split(' ').join('').split(',').join('').length);
    };
};

var letters = 'Привет, студент! Студент... Как дела, студент?';

console.log(howMuch(letters));