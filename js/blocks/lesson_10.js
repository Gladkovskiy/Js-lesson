										//урок 10 оосбенности современного стандарта
/*let name = 'Ivan',
	 age = 30,
	 mail = 'exe@mail.ru';

	 // document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);
	 //используется ковычка буквы ё. Переменнные помещаются в конструкцию ${}
	 document.write(`Пользователю ${name} ${age}  лет. Его почтовый адрес: ${mail}`);*/

//использовать let для объявления, var устарел и сложно прослеживать.
/*function makeArray () {
	let items = [];

	for (let i = 0; i < 10; i++) {
		let item = function() {
			console.log(i);
		}
		items.push(item);
	}
	return items;
}

let arr = makeArray();
arr[0]();
arr[5]();*/

//стрелочные функции
/*let fun = () => {
	console.log(this);
}
fun();*/

/*let obj = {
	number: 5,
	sayNumber: function () {
		let say = () => {
			console.log(this); //контекст стрелочной функции будет объект
		}
		say();
	}
};

obj.sayNumber();*/

/*let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
	let show = () => {
		console.log(this); //получаем наш button, контекст получает с окружения
	}
	show();
});*/

//параметры которые передеём по умолчанию имели бы какието значения
/*function calcDouble (number, basis = 2) {
	console.log(number * basis);
};
calcDouble(10); //если укажем второй параметр, то будет применён он*/

// классы

/*class Rec { //создание класса
	constructor(height, width) { //описание объекта 
		this.height = height;
		this.width = width;
	}
	calcArrea() { //описание метода для объекта
		return this.height * this.width 
	}
}

const squre = new Rec(10, 15); //переменная с классом 
console.log(squre.calcArrea());
*/