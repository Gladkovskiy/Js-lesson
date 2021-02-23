/*1) Написать проверку, что пользователь может: 
 Ввести в типах товара только строку  
 Не может оставить строку пустой 
 Не может отменить вопрос 
2) При помощи метода перебора массива(forEach) вывести 
на экран сообщение "У нас вы можете купить: " 
и полученные товары 
Товары должны начинаться 
с 1, а не с 0. Этот пункт - часть одноименной функции 
3) Используя цикл for in для объекта вывести 
в консоль сообщение "Наш магазин включает в себя: "*/
/*let price = 100;
let mainList = {
	budget: 10000,
	shopName: 'Shop',
	shopGoods: [],
	employers: [],
	open: false,
	discount: false,
	shopItems: [],
	chooseGoodse: function chooseGoodse() {
		for (let i = 0; i < 3; i++) {
			let a = prompt('Какой тип товаров будем продавать?', '')
			if ( typeof(a) === 'string' && a != '' && a.length < 50 ) {
				console.log('всё верно');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	},
	workTime: function workTime (time) {
		if (time < 0) {
			console.log('Такого не можетр быть');
		} else if ( time > 8 && time <20) {
			console.log('время работать');
		} else if (time < 24) {
			console.log('слишком поздно');
		} else {
			console.log('в сутках 24 часа');
		} 
	},
	showBudget: function showBudget () {
		alert('Ежедневный бюджет' + mainList.budget/30);	
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = price*0.8;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {
			let name = prompt('Имя сотрудника', '');
			mainList.employers[i] = name;
		}		
	},
	chooseShopItem: function chooseShopItem () {
		let items = prompt('Перечислите через запятую ваши товары', '');
		if (typeof(items) === 'string' && typeof(items) != null && items != '') {
			mainList.shopItems = items.split(','); //записали массив из строки с разделителем запятой
			// mainList.shopItems.push(prompt('Подожите ещё', '')); //добавили в конец если забыли
			mainList.shopItems.sort(); //отсортировали по алфавиту
			console.log(mainList.shopItems);	
			mainList.shopItems.forEach(function(element, index, arr) {
				if (index != 0) {
					console.log('У нас вы можете купить: ' + element);
				}
			});
			for (var i = 0; i < mainList.shopItems.length; i++) {
				console.log('Наш магазин включает в себя: ' + mainList.shopItems[i]);
			}		
		} else {
			alert('Не правельно ввели данные')
		}

	}
}
console.log(mainList);
*/



/*Многомерные массивы ( [ [], [], ..] ) иногда называют матрицами 
1) Написать функцию, которая будет спрашивать у пользователя сколько 
массивов включить во внутрь arr 
2) Заполняет их несколькими произвольными числами (не больше 5) 
и выводит сумму элементов этого массива*/

/*let numberOfMassive = prompt('Сколько будет массивов?');
let arrBig = [];

function creatBigMassive (numberMassiv) {
	let summa = 0;
	for (let i = 0; i < numberMassiv; i++) {
		for (let j = 0; j < 5; j++) {
			arrBig[i, j] = Number(prompt('номер массива:' + i + ' номер элемента: ' + j));
			summa = summa + arrBig[i, j];
		}
	}
	return(summa);
}

console.log(creatBigMassive(numberOfMassive));*/



