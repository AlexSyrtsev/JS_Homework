// ЗАДАЧА 1
// Переписать предыдущий пример с кошками на прототипный стиль ООП.

function Animal(name) {
    this._foodAmount = 50; // в прототипном стиле приватных свойств и методов как таковых нет --> методы хранятся отдельно от конструктора со свойствами -- т.е. теряется общая область видимости. Поэтому в ПРОТОТИПНОМ стиле всё приватное ВСЕГДА становится защищённым: свойство пишем через this и нижнее подчёркивание, а...
    this.name = name;
}

Animal.prototype._formatFoodAmount = function() { // ... метод -- через prototype.
    return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(norm) {
    if (!arguments.length) return this._formatFoodAmount();

    if (norm < 50) {
        throw new Error('Маловато!');
    }
    if (norm > 500) {
        throw new Error('Многовато!');
    }

    this._foodAmount = norm;
}

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) { // конструктор в прототипном ООП наследуется так же, как в функциональном.
    Animal.apply(this, arguments)
}

Cat.prototype = Object.create(Animal.prototype); // чтобы один класс отнаследовал МЕТОДЫ другого -- используем метод обджект-криэйт. В prototype лежит ссылка __proto__.

Cat.prototype.feed = function() { // добавим свои методы, т.е. расширим метод родителя.
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен! (^._.^)ﾉ')
    return this;
}

Cat.prototype.stroke = function() { // добавим публичный метод stroke.
    console.log('Гладим кота!');
    return this;
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(300);
barsik.stroke().stroke().feed();


// ЗАДАЧА 2
// Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
// (+ массивы и функции), а также любого уровня вложенности. Метод isArray использовать можно.

function deepClone(obj) {
    if (!obj) {
        return obj;
    }

    var v;
    var clonedObj = Array.isArray(obj) ? [] : {};
    for (var k in obj) {
        v = obj[k];
        clonedObj[k] = (typeof v === "object") ? deepClone(v) : v;
    }
    return clonedObj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log( initialObj );
console.log( clonedObj );


// ЗАДАЧА 3
// Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
// (+ массивы и функции), а также любого уровня вложенности. Для определения длины объектов разрешается использовать
// метод Object.keys().

function deepCompare(x, y) {
    if (Object.keys(x).length === Object.keys(y).length) {
      for (var key in x) {
        if (typeof x[key] === 'object' && x[key] !== null) {
          if (!deepCompare(x[key], y[key])) {
            return false;
          }
        } else if (typeof x[key] === 'function') {
          if (x[key] + '' !== y[key] + '') {
            return false;
          }
        } else if (x[key] !== y[key]) {
          return false;
        }
      }
      return true;
    }
    return false;
}

// Протестировать работу функции можно на таких примерах:

var firstObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var secondObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};
  
console.log( deepCompare(firstObj, secondObj) );