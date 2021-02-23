/*let budget = prompt('Ваш бюджет?');
let name = prompt('Название вашего магазина?');
let time = 19;

let mainList = {
		budget: budget,
		shopName: name,
		shopGoods: [],
		employers: [],
		open: false
}

for (let i = 0; i < 3; i++) {
	let a = prompt('Какой тип товаров будем продавать?')
	if ( typeof(a) === 'string' && a != '' && a.length < 50 ) {
		console.log('всё верно');
		mainList.shopGoods[i] = a;
	} else {

	}
};*/

/*let i = 0;
while (i < 3) {
	let a = prompt('Какой тип товаров будем продавать?')
	if ( typeof(a) === 'string' && a != '' && a.length < 50 ) {
		console.log('всё верно');
		mainList.shopGoods[i] = a;
	}
	i++
};*/

/*let i =0;
do {
		let a = prompt('Какой тип товаров будем продавать?')
	if ( typeof(a) === 'string' && a != '' && a.length < 50 ) {
		console.log('всё верно');
		mainList.shopGoods[i] = a;
	}
	i++
}
while(i < 3);*/

/*if (time < 0) {
	console.log('Такого не можетр быть');
} else if ( time > 8 && time <20) {
	console.log('время работать');
} else if (time < 24) {
	console.log('слишком поздно');
} else {
	console.log('в сутках 24 часа');
};

alert(mainList.budget/30);

console.log(mainList);
*/
/*Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице

1) Создать массив week и записать в него дни недели
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - жирным шрифтом
·        Текущий день - курсивом
2) Создать массив arr = []
·        Записать в него 7 многозначных чисел в виде строк
·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
3) Добавить папку с усложненным заданием в свой репозиторий на GitHub*/

/*let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let actDay = 'Среда';
let list = document.getElementById('week');

for (let i = 0; i < 7; i++) {
	let li = document.createElement('li');
	li.innerHTML = week[i];
	if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
		list.appendChild(li);
	} else if (week[i] == actDay) {
		list.appendChild(li);
		li.style.fontStyle = 'italic';
	} else {
		list.appendChild(li);
		li.style.fontFamily = 'Ubuntu Light';
	}

}*/

/*let arr_1 = ['3646', '8678', '3678', '8678', '867', '7896', '235'];
let i = 0;

while (i<7) {
	if (arr_1[i].substring(0, 1) == '3' || arr_1[i].substring(0, 1) == '7') {
		console.log(arr_1[i]);
	}
	i++;
}*/

