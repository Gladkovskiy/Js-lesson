/*window.addEventListener('DOMContentLoaded', () => {

	let tab = document.querySelectorAll('.info-header-tab'),
	wrap = document.querySelector('.info-header'),
	content = document.querySelectorAll('.info-tabcontent');
//скрываем и показуем нужный контент, для старта страницы
let hideAll = (a) => {
	for (let i = 0; i < content.length; i++) {
		if (i != a) {
			content[i].classList.add('hide1');
			content[i].classList.remove('show1');
		} else {
			content[i].classList.add('show1');
			content[i].classList.remove('hide1');
		}
	}
}
hideAll(0);

wrap.addEventListener('click', (event) => {
	for (let i = 0; i < tab.length; i++) {
		if (event.target == tab[i]) {
			hideAll(i);
		}
	}
});

	//таймер
	let deadline = '2021-03-4';

	function getTime(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		sec = Math.round((t / 1000) % 60),
		min = Math.round((t / (1000 * 60) % 60)),
		hour = Math.round((t / 3600000));


		return{
			'total': t,
			'hour': hour,
			'min': min,
			'sec': sec
		};
	};
	function setTime (id, endtime) {
		let timer = document.getElementById(id),
		hour = document.querySelector('.hours'),
		min = document.querySelector('.minutes'),
		sec = document.querySelector('.seconds');

		function updateClock () {
			let t = getTime(endtime);
			hour.innerHTML = t.hour;
			min.innerHTML = t.min;
			sec.innerHTML = t.sec; 
			if (t.total <= 0) {
		 		clearInterval(timeInterval); //останавливаем функцию 
		 		hour.innerHTML = '00';
		 		min.innerHTML = '00';
		 		sec.innerHTML = '00';
		 	}
		 };
		 let timeInterval = setInterval(updateClock, 1000); //запуск функции с интервалом 1 сек
		};
		setTime('timer', deadline)


//плавная прокрутка при нажатии на пункт меню
let header_wrap = document.querySelector('.header-menu'),
menu_item = document.querySelectorAll('.header-menu__item'),
	 pos_set = 0, //позиция заданная
	 pages = document.querySelectorAll('.pages'); //общий класс для блоков на которые надо перейти

	 header_wrap.addEventListener('click', (event) => {
	let pos_actual = document.documentElement.scrollTop; //позиция в документе

	for (let i = 0; i < menu_item.length; i++) {
		if(menu_item[i] == event.target) {
			pos_set = pos_actual + Math.round(pages[i].getBoundingClientRect().y / 10) * 10; //автоматическое опередление координаты объекта (относительно), прибовляем актуальную позицию получаем абсолютное
		}

	}
	function setpoint () {
		if (pos_actual < pos_set) {
			pos_actual += 10;	
		} else if (pos_actual > pos_set) {
			pos_actual -= 10;	
		}
		window.scrollTo(0, pos_actual);
		if (pos_actual == pos_set || pos_set == 0) {
			clearInterval(timer);
		}
	}
	let timer = setInterval(setpoint, 1);
});

//модальное окно
let more = document.querySelector('.more'),
desc_btn = document.querySelector('.description-btn'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup1-close');


function popup (button) { 
	button.addEventListener('click', function() {
		button.classList.add('more-splash');
		overlay.style.display = 'block';
	 document.body.style.overflow = 'hidden'; //не прокручивается сайт
	});
	close.addEventListener('click', function(){
		overlay.style.display = 'none';
		button.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
};
popup(more);
popup(desc_btn);

});
*/

//Создать правильное решение для кода внизу
/*let age = document.getElementById('age');
function showUser(surname, name) {
	console.log('пользователь ' + surname + ' ' + name + 'его возраст' + this.value);
};*/
// 1 - Вариант через класс
/*let age = document.getElementById('age');
class User {
	constructor(age) {
		this.age = age.value
	}
	showUser(surname, name) {
		console.log('пользователь ' + surname + ' ' + name + 'его возраст ' + this.age);
	}
};
let Ivan = new User(age);
Ivan.showUser('Крокодил', 'Крокодилович'); */
// 2 - вариант через конструктор отдельно
/*let age = document.getElementById('age');
function User(age) {
	this.age = age.value;
};
let Ivan = new User(age);
function showUser(surname, name) {
	console.log('пользователь ' + surname + ' ' + name + 'его возраст ' + this.age);
};
showUser.call(Ivan, 'Kruk', 'Slavik');*/




