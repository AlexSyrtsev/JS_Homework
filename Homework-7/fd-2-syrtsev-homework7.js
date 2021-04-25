// Практическое задание 4:
//       Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
//       Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
//         "Насыпаем в миску (количество гр.) корма.
//         Кот доволен ^_^"
//       Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
//       Все вызовы, которые работали ранее, должны по-прежнему работать корректно.


Решение:

function Animal(name) {
  this._foodAmount = 50; // делаем свойство защищённым, чтобы м.б. обратиться к приаватному как к публичному из дочернего класса.

  var self = this; // добавлен для сохранения контекста.

  function formatFoodAmount() {
      return this._foodAmount + ' гр.'; 
  }

  this._name = name;

  this.feed = function() {
      console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
  };

  this.dailyNorm = function(norm) {
      if (!arguments.length) return formatFoodAmount();

      if (norm < 50) {
          throw new Error('Маловато!');
      }
      if (norm > 500) {
          throw new Error('Многовато!');
      }

      foodAmount = norm;
  };
}

function Cat(name) {
  Animal.apply(this.arguments); // отнаследовались от класса Animal: вызвали родительский класс, но в качестве this передали объект дочернего класса.

  function formatFoodAmount() {
      return foodAmount + ' гр.';
  }

  var animalFeed = this.feed; // в новую переменную сохраняем код родительского метода.
  this.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    console.log('Кот доволен! (^._.^)ﾉ'); // расширяем метод feed вторым консоль.логом.
  }

  this.dailyNorm = function(norm) {
      if (!arguments.length) return formatFoodAmount();

      if (norm < 50) {
          throw new Error('Маловато!');
      }
      if (norm > 500) {
          throw new Error('Многовато!');
      }

      foodAmount = norm;
  };
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(300);
barsik.feed();



//  Практическое задание 5:
//       Добавить публичный метод stroke, который будет выводить в консоль информацию "Гладим кота.".
//       Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
//       последовательности и сколько угодно раз.
//       (Лишние логи можно убрать, делать всё в том же задании).

Решение
function Animal(name) {
  var foodAmount = 50;

  var self = this;

  function formatFoodAmount() {
      return self._foodAmount + ' гр.';
  }

  this.name = name;

  this.feed = function() {
      console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
  };

  this.dailyNorm = function(norm) {
      if (!arguments.length) return formatFoodAmount();

      if (norm < 50) {
          throw new Error('Маловато!');
      }
      if (norm > 500) {
          throw new Error('Многовато!');
      }

      foodAmount = norm;
  };
}

function Cat(name) {
  Animal.apply(this.arguments);

  var foodAmount = 50;

  function formatFoodAmount() {
      return foodAmount + ' гр.';
  }

  this.name = name;

  var animalFeed = this.feed;
  this.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    console.log('Кот доволен! (^._.^)ﾉ');
    return this; // добавили ретурн.
  }

  this.stroke = function() { // добавили публичный метод stroke.
    console.log('Гладим кота!');
    return this; // добавили ретурн.
  }

  this.dailyNorm = function(norm) {
      if (!arguments.length) return formatFoodAmount();

      if (norm < 50) {
          throw new Error('Маловато!');
      }
      if (norm > 500) {
          throw new Error('Многовато!');
      }

      foodAmount = norm;
      return this; // добавили ретурн.
  }; 
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(300).stroke().feed().stroke().stroke().stroke().feed();