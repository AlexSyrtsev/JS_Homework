// ЗАДАЧА 1
// Написать функцию, принимающую массив имен и 
// возвращающую массив объектов вида {name: 'Vasya'}.

var arr = ['John', 'Paul', 'George', 'Ringo'];

var newArr = arr.map(function (name) {
    return {name: name};
});

console.log( newArr );


// ЗАДАЧА 2
// Написать функцию, принимающую массив вида ['00', '13', '24'] и 
// возвращающую строку "Текущее время : 00 : 13 : 24".

var numbers = ['00', '13', '24'];

var time = numbers.reduce(function(prev, curr) { // схлопнем элементы массива редьюсом;
    return prev + ':' + curr;
}, 'Текущее время '); // зададим initialValue;
  
console.log( time );


// ЗАДАЧА 3
// Написать функцию, которая будет возвращать количество 
// гласных в переданном тексте. Регистр любой.

function vowelCount(str){
  var vowelString = 'AEIOUYaeiouy';
  var count = 0;
  
  for(var i = 0; i < str.length ; i++){
    if (vowelString.indexOf(str[i]) !== -1){
      count += 1;
    }
  
  }
  return count;
}
console.log(vowelCount('Is this a real life? Is this just fantasy?'));
console.log(vowelCount('Open your eyes! Look up to the skies and see!'));
console.log(vowelCount('I see a little silhouetto of a man. Scaramouch, Scaramouch!'));


// ЗАДАЧА 4
// Написать функцию, которая будет принимать текст в качестве параметра.
// У текста должны быть пробелы, точки, запятые, восклицательные и вопросительные знаки.
// Текст необходимо разбить на предложения (по точкам, восклицательным и вопросительным знакам - убрав их).
// Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем.

function howMuch(letters) {
    var text = letters.split(/[a-z]*[?!.]/g);

    for (var i = 0; i < text.length; i++){
        console.log(text[i] + ' : Letters quantity is : ' + text[i].split(' ').join('').split(',').join('').length);
    };
};

var letters = 'Привет, студент! Студент... Как дела, студент?';

console.log(howMuch(letters));