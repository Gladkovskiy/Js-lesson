// let budget = prompt('Ваш бюджет?');
// let name = prompt('Название вашего магазина?');
// let time = 19;
// let price = 100;

// let mainList = {
// 		budget: budget,
// 		shopName: name,
// 		shopGoods: [],
// 		employers: [],
// 		open: false,
// 		discount: true
// }
/*let employers = {
	number: [],
	name: []
}

function employers1(numberOfWorker) {
	let i = 0;
	while (i < numberOfWorker) {
	 	employers.number[i] = i+1;
	 	employers.name[i] = prompt('Имя сотрудника?');
	 	console.log(employers.number[i] + ' - ' + employers.name[i]);
	 	i++;
	 } 
};
employers1(4);*/

/*function discount(a,b) {
	if (a == true) {
		return(b*0.8);
	}
};
console.log(discount(mainList.discount, price));*/

/*for (let i = 0; i < 3; i++) {
	let a = prompt('Какой тип товаров будем продавать?')
	if ( typeof(a) === 'string' && a != '' && a.length < 50 ) {
		console.log('всё верно');
		mainList.shopGoods[i] = a;
	} else {

	}
};


while(i < 3);
if (time < 0) {
	console.log('Такого не можетр быть');
} else if ( time > 8 && time <20) {
	console.log('время работать');
} else if (time < 24) {
	console.log('слишком поздно');
} else {
	console.log('в сутках 24 часа');
};

function showBudget (a) {
	alert(a/30);	
};
showBudget(mainList.budget);*/

/*Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице 
1) У вас есть str = “урок-3-был слишком легким” 
Сделать так, чтобы строка начиналась с большой буквы 
2) Теперь замените все “-” на пробелы  Вывести в консоль 
3) Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”  Вывести на экран 
4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3] 
 Вывести в консоль квадратный корень из суммы кубов его элементов*/
//изменять строки нельзя только перезаписывать результат
/*let str = 'урок-3-был слишком лёгким';
console.log(str.toUpperCase()[0] + str.substring(1));
let strTemp = str.replace(/-/g, ' ');
strTemp = strTemp.replace(/лёгким/g, '');
console.log(strTemp);
strTemp = strTemp.substring(0, strTemp.length-2) + 'oo';
console.log(strTemp);*/

/*let arrTemp = [20, 33, 1, 'Человек', 2,3];
let temp = 0;
for (let i = 0; i < arrTemp.length; i++) {
	if (typeof(arrTemp[i]) == 'number') {
		temp = temp + Math.pow(arrTemp[i], 3);
	}
}
console.log(Math.sqrt(temp));*/

