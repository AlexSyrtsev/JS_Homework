// Задание 1:
///
var email = 'name_surname-1234@gmail.com';
var email2 = 'name_surname@gmail.com'; // без "-1234"
var email3 = 'name_surname-1234@g-mail.com'; // с тире в имени почтового сервиса
var email4 = 'name_surname-1234@g.mail.com'; // с точкой в имени почтового сервиса
var email5 = 'namesurname-1234@gmail.com'; // без _ между именем и фамилией
var email6 = 'name_surname-1234@gmail.by'; // без .com
var email7 = 'name_surname-1234@.gmail.by'; // с точкой в начале имени почтовика

// регулярное выражение:
// /^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test('name_surname-1234@gmail.com')
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email));

// true без "-1234":
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email2));

// true с тире в имени почтовика:
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email3));

// true с точкой в имени почтовика:
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email4));

// false без _ между именем и фамилией
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email5));

// false без .com
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email6));

// false, если знак в начале/конце имени почтовика
console.log(/^[A-Za-z]{3,10}[_]{1}[A-Za-z]{3,10}(-[0-9]{4}){0,1}[@]{1}[a-zA-Z0-9]{1,10}[\.-]{0,1}[a-zA-Z0-9]{1,10}[\.]{1}com{1}$/.test(email7));

// ------------------------

// Задание 2:
//
// регулярное выражение:
// /^[\+]{0,1}(375|8-0|80)[\-]{0,1}(17|25|29|33|44)[\-]{0,1}[1-9]{1}[0-9]{2}[\-]{0,1}[0-9]{2}[\-]{0,1}[0-9]{2}$/.test('+375-25-777-77-77')

function letsTest(thisNumber) {
    var pattern = /^[\+]{0,1}(375|8-0|80)[\-]{0,1}(17|25|29|33|44)[\-]{0,1}[1-9]{1}[0-9]{2}[\-]{0,1}[0-9]{2}[\-]{0,1}[0-9]{2}$/.test(thisNumber)
    return pattern;
}

// true x5
console.log(letsTest('+375-25-777-77-77')); // везде тире и есть плюс
console.log(letsTest('375299999999')); // нет тире и плюса
console.log(letsTest('8-044-444-44-44')); // везде тире и восьмёрка
console.log(letsTest('8033-6666666')); // восьмёрка и после кода одно тире
console.log(letsTest('+375-25-7777777')); // некоторые тире пропущены, но оставшиеся -- как в примерах 1 и 3

// false x2
console.log(letsTest('375-25-077-77-77')); // основная часть номера начинается c 0
console.log(letsTest('375-250-777-777')); // тире в неположенном месте

// ------------------------

// Задание 3:
// БЫЛО
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


// СТАЛО
function vowelCount(str) {

    var result = str.match(/[AEIOUYaeiouy]/g).length;
    return result;
}

console.log(vowelCount('Is this a real life? Is this just fantasy?'));
console.log(vowelCount('Open your eyes! Look up to the skies and see!'));
console.log(vowelCount('I see a little silhouetto of a man. Scaramouch, Scaramouch!'));