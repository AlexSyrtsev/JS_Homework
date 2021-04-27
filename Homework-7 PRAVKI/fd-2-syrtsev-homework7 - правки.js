// Практическое задание 4:
//       Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
//       Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
//         "Насыпаем в миску (количество гр.) корма.
//         Кот доволен ^_^"
//       Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
//       Все вызовы, которые работали ранее, должны по-прежнему работать корректно.

Решение
function Animal(name) {
    var foodAmount = 50; // правка: "this._foodAmount = 50; не нужно было делать защищенным. нам к нему прямой доступ из потомка не нужен".
    
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
  
    var name = name; // правка: "this._name = name; было публичным - им и остается".
    var self = this;
  
    this.feed = function() {
        console.log('Насыпаем в миску ' + foodAmount + ' гр. корма.'); // правка: "доработать родительский feed так, чтоб он работал с сохраненным контекстом".
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
    Animal.apply(this, arguments);

    var animalFeed = this.feed; // сохраняем в новые переменные код родительского метода.
    var dailyNorma = this.dailyNorm; 

    this.feed = function() {
        animalFeed(); // правка: "в котячем методе feed не нужно дублировать руками console.log; вы должны вызвать здесь предварительно сохраненный animalFeed".
        console.log('Кот доволен! (^._.^)ﾉ'); 
    }  

    this.dailyNorm = function(norm) { // переопределяем родительскую функцию.
      dailyNorma(norm);
    }
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
    
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
  
    var name = name;
    var self = this;
  
    this.feed = function() {
        console.log('Насыпаем в миску ' + foodAmount + ' гр. корма.');
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
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    var dailyNorma = this.dailyNorm; 

    this.feed = function() {
        animalFeed();
        console.log('Кот доволен! (^._.^)ﾉ'); 
        return this; // добавили ретурн.
    }  
    this.dailyNorm = function(norm) {
      dailyNorma(norm);
        return this; // добавили ретурн.
    }

    this.stroke = function() { // добавили публичный метод stroke.
        console.log('Гладим кота!');
        return this; // добавили ретурн.
    }
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(300).stroke().stroke().feed();