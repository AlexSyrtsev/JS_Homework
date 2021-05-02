// ЗАДАЧА 1
// Переписать задачу с использованием перебирающего метода массивов:

// БЫЛО
// function filterNumbersArr(numbers) {
//     var newArr = [];

//     for (var i = 0; i < numbers.length; i++) {
//         var el = numbers[i];

//         if (el > 0) {
//             newArr[newArr.length] = el;
//         }
//     }

//     return newArr;
// }

// filterNumbersArr([-1, 0, 2, 34, -2]);

// СТАЛО
var arr = [-1, 0, 2, 34, -2];

var positivArr = arr.filter(function(number) { // применим метод фильтрации и вернём все числа больше нуля;
    return number > 0;
});

console.log(positivArr); // 2, 34;


// ЗАДАЧА 2
// Написать функцию, принимающую массив чисел и 
// возвращающую первое найденное положительное число.

function firstAboveZero(arr) { 
    var result = arr.find(function(number) {
        return number > 0;
    });
    return result;
}

// Проверим работу функции:
var arr = [-11, -4, 0, 7, 4, -12];
var arr2 = [-1, -2, 0, 77, 44, -2];
var arr3 = [-10, -21, 0, 777, 14, -21];

console.log(firstAboveZero(arr)); // 7
console.log(firstAboveZero(arr2)); // 77
console.log(firstAboveZero(arr3)); // 777


// ЗАДАЧА 3
// Написать функцию, которая будет определять, является ли 
// переданное в нее слово палиндромом.
// Регистр в словах учитываться не должен.

var pal = [];

function isPalindrome(pal) {
    return pal.toLowerCase() == pal.toLowerCase().split('').reverse().join(''); // игнорируем регистр -- приводим всё к нижнему; 
    // сплитом разбили строку по буквам; реверсом изменили порядок букв; собрали буквы в новое слово с нулевым разделителем. 
}

// Проверим работу функции:
console.log(isPalindrome('комоК')); // true
console.log(isPalindrome('привет')); // false
console.log(isPalindrome('шалаШ')); // true
console.log(isPalindrome('чао')); // false
console.log(isPalindrome('ДоВоД')); // true
console.log(isPalindrome('хай')); // false
console.log(isPalindrome('УШУ')); // true


// ЗАДАЧА 4
// Написать функцию, которая будет определять, являются ли переданные в неё 
// слова анаграммами.
// Регистр в словах учитываться не должен.

function areAnagrams(anag1, anag2){
    return anag1.toLowerCase().split('').sort().join('') === anag2.toLowerCase().split('').sort().join('');
    // разбили строку-анаграмму на подстроки-буквы; отсортировали элементы 
    //и вернули строку, склеив буквы нулевым разделителем.
}

// Проверим работу функции:
console.log(areAnagrams('ниТка', 'Ткани')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false
console.log(areAnagrams('Мышка', 'камыШ')); // true
console.log(areAnagrams('ЛУЧОК', 'ЧУЛОК')); // true
console.log(areAnagrams('кол', 'лук')); // false
console.log(areAnagrams('баян', 'баня')); // true


// ЗАДАЧА 5
// Написать функцию, которая будет разбивать массив на подмассивы определенной длины.

function divideArr(myArray, chunksize){ // помещаем в функцию массив и параметр размера куска массива;
    var arrayOfArrays = [];
    
    while (myArray.length) { // на каждой итерации удаляем с начальной позиции по частичке массива равной указанному количеству элементов и добавляем в новый массив;
        arrayOfArrays.push(myArray.splice(0, chunksize));
    }
    
    return arrayOfArrays;
}

// Проверим работу функции:
var res = divideArr([1, 2, 3, 4], 2); 
var res2 = divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(res); // [[1, 2], [3, 4]]
console.log(res2); // [[1, 2, 3], [4, 5, 6], [7, 8]]