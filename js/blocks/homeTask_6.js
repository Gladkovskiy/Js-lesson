/*let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money,
	price;

let mainList = {
	budget: 10000,
	shopName: 'Shop',
	shopGoods: [],
	employers: [],
	open: false,
	discount: false,
	shopItems: []
}

open.addEventListener('click', () => {
	money = prompt('Ваш бюджет?', '');
	while (isNaN(money) || money =='' || money == null) {
		money = prompt('Ваш бюджет?', '');
	}
	budget_value.textContent = money;
	name_value.textContent = prompt('Название вашего магазина?', '');	
});

goods_btn.addEventListener('click', () => {
	for (var i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
		if ( typeof(a) === 'string' && typeof(a) != null && a.length < 50 ) {
			console.log('всё верно');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
			i = i - 1;
		}
	}
});

choose_item.addEventListener('change', () => {
	let item = choose_item.value;
	if (isNaN(item) && item !='') {
		mainList.shopItems = item.split(', ');
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;

	}
});

time_value.addEventListener('change', () =>{
	let time = time_value.value;
	if (time < 0) {
			mainList.open = false;
		} else if ( time > 8 && time <20) {
			mainList.open = true;
		} else if (time < 24) {
			mainList.open = false;
		} else {
			mainList.open = false;
		} 
	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
	}
});


budget_btn.addEventListener('click', () => {
	if (!isNaN(money)) {
		count_budget_value.value = Math.round(money / 30);	
	}
});

employers_btn.addEventListener('click', () => {
	for (var i = 0; i < hire_employers_item.length; i++) {
		mainList.employers[i] = hire_employers_item[i].value;
		// employers_value.textContent += '  ' + mainList.employers[i];
	}
	let str = mainList.employers.join('  ');
	employers_value.textContent = str;
});

discount = () => {
	if (mainList.discount == true){
		discount_value.style.backgroundColor = 'green';
	} else {
		discount_value.style.backgroundColor = 'red';
	}
};
discount();

*/