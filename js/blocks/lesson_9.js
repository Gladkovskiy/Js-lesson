							//урок 9
/*			// функция конструктор, для создания объектов с одинаковыми свойствами. Имя функции с большой буквы
function User (name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log('Privet ' + this.name);
	}
};
//добавляем метод для объекта
User.prototype.exit = function(){
	console.log('Пользователь ' + this.name + ' ушёл'); 
};

//создаётся объект с помощью вызова функции конструктора через new
let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();
ivan.exit();*/

		// строгий режим (стрикт)
/*'use strict';
let num = 4;
console.log(num);*/

		//контекст вызова
/*function showThis () {
	console.log(this);
};
showThis();*/ //выведит объект window

/*function showThis (a,b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b; 
	}
	console.log(sum());
};
showThis(4, 5);*/

/*let obj = {
	a: 2, //свойство
	b: 3,
	sum: function () { //метод
		console.log(this); // ссылается на obj
		function shout () {
			console.log(this); //ссылется на window
		};
		shout();
	}
};
obj.sum();
*/

// 1. Просто вызов функции, this = window
//	2. Метод в объекте - this = объекту
// 3. Конструктор (new) - this = созданному новому объекту
// 4. //Указание конкретного контекста - call, apply, bind

//Указание конкретного контекста !!!! - очень полезная вещь
/*function Constructor(firstName) {
	this.name = firstName;
};

let user = new Constructor('Ваня');

function saveName (surname) {
	console.log(this);
	console.log(this.name + surname);
};
console.log(saveName.call(user, ' Smith')); //вызов функии с объектом user
console.log(saveName.apply(user,[' Snow'])); //вызов функии с объектом user*/

/*Пишется функци я с this, привязывается к объекту. Объект создаётся
через конструктор с параметрами тоже через this. А параметры берутся 
с бэкенда*/

/*function count (number) {
	return this * number;	 
};

let double = count.bind(2); //вместо this подставляется значение 2

console.log(double(3));
console.log(double(10));*/

//если this вызывается в событии элемента то this указует на этот элемент DOM
/*let tab = document.querySelectorAll('.info-header-tab')[0];

tab.addEventListener('click', function() {
	this.style.color = 'red';
});*/

//создание класса, можно стразу и конструктор и функции данного класса сделать

/*class User {
	constructor(name, surname) { //структура объекта
		this.name = name;
		this.surname = surname;
	}
	showName(drug) {		//набор функций для этого объекиа
		console.log('Лучшие друзья ' + this.name+ ' и ' + drug);
	}
	showSername() {
		console.log(this.surname);
	}
};
let denis = new User('Денис', 'Борисович');
denis.showName('Сергей');*/