//объявление переменных
var first = 1;
const pi = 3.14; // нельзя менять
{
	let second = 2; //локальные переменные которые видны в функции
}

var number = 4;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null; //когда в коде что-то не существует
undefined; // переменная существует но у неё нет значения
var obj = {}; // структура, могут содержатся другие типы
obj = {
	name: "John",
	age: 25,
	isMarried: false
}
// console.log(obj.name);
// console.log(obj["name"]);

//массив, нумерация начинается с 0
var arr = ['plum', 'orange', 'apple'];

// console.log(arr[2]); //вывод в консоль разработчика

//модальные окна
// alert('hello');
// confirm('are you here?');
// prompt('Если вам 18?', '18');

//проверка типа переменной
// console.log(typeof(boolean));

// console.log(4/0); //infinity - бесконечность
// console.log('string' * 9); //NaN - ощибка в выражении

// console.log('obj' + ' main');
// console.log('obj ' + 10);
// console.log(arr + 10);

var  incr = 20,
     decr = 20;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);
// console.log(5<2);
// console.log(5%2); //остаток от деления
// console.log(incr == '21'); //сравнение не обращая внимание на тип
// console.log(incr === '21');//сравнение с учётом типа данных

var isCheked = true,
    isNotCheked = false;

// console.log(isCheked && !isNotCheked);	//и
// console.log(!isCheked || isNotCheked); //или	

							
							//домашнее задание

// В файле скрипта создать 2 переменные, которые будут получать данные от пользователя:
//         Первая будет спрашивать "Ваш бюджет?"
//         Вторая "Название вашего магазина?"
// var Budget = prompt('Ваш бюджет?');
// var nameMagazin = prompt('Название вашего магазина?');
// console.log(Budget);
// console.log(nameMagazin);

//Создать объект mainList, который будет содержать такие данные:
// ·        Бюджет
// ·        Имя магазина
// ·        Массив товаров shopGoods
// ·        Объект с сотрудниками employers
// ·        Свойство open
var mainList = {
				budget: 100,
				nameMagazin: 'Andrey',
				shopGoods: [],
				open: false
}
// Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
// for (let i = 0; i < 3; i++) {
// 	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?')
// }
// console.log(mainList.shopGoods);

//Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
// alert(mainList.budget/30);

// Создать переменную num со значением 33721
// ·        Вывести в консоль произведение (умножение) цифр этого числа.
// Полученный результат возвести в степень 3, используя только 1 оператор
// ·        Вывести его на экран
var num = 33722;
var result = 1;

for (let i = 5; i > 0; i--) {
	let stepen = Math.pow(10, i-1);
	let ostatok = num%stepen;
	if (num >10) {
		let cel = (num - ostatok)/stepen;
		result = result*cel;
		num = ostatok;
	}
	else
		result = result * num;
	console.log(result);
}
alert(Math.pow(result, 3));
