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
		document.getElementsByClassName('status')[0].remove(); //удаляем надпись о статусе
	});
};
popup(more);
popup(desc_btn);

										//FORM
let message = {};
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так';

let form = document.getElementsByTagName('form'),
	// form = document.getElementsByClassName('main-form')[0],
	// input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
statusMessage.classList.add('status');

//отправляем несколько форм в один обработчик
let formEvent = (form) => {
	let input = form.getElementsByTagName('input');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		form.append(statusMessage);


	//AJAX
	let request = new XMLHttpRequest(); //создаём объект AJAX
	request.open('POST', 'server.php'); //открываем соединение
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //для правильной кодировки

	let formData = new FormData(form); //соберает все данные с формы
	request.send(formData);//отсылаем наши данные с формы все

	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
				//добавляем контент на страницу
			} else {
				statusMessage.innerHTML = message.failure;
			}
		} 
	}
	for (let i = 0; i < input.length; i++) {
		input[i].value = ''; //очищаем инпуты после сабмита
	}
});

};
formEvent(form[0]); //добавили отправку для 1 формы
formEvent(form[1]); //добавили отправку для 2й формы*/

										// Слайдер
										//мой слайдер
/*let slider = document.getElementsByClassName('slider-item');

let hideSlide = (slidShow) => {
	for (let i = 0; i < slider.length; i++) {
		if (i != slidShow) {
		slider[i].style.display = 'none';
		} else {
			slider[i].style.display = 'block';
		}
	}
};
hideSlide(0);

let dots = document.querySelector('.slider-dots'),
	allDots = document.querySelectorAll('.dot');
	dots.addEventListener('click', (event) => {
		for (let i = 0; i < allDots.length; i++) {
			if (event.target == allDots[i]) {
				hideSlide(i);
				allDots[i].classList.add('dot-active');
			} else {
				allDots[i].classList.remove('dot-active');			
			}
		}
	});*/

	
/*let slideIndex = 0, //аквтиный слайд
	slides = document.getElementsByClassName('slider-item'),//массив слайдов
	prev = document.querySelector('.prev1'),//стрелка предыдущая
	next = document.querySelector('.next1'),//стрелка следующая
	dotsWrap = document.querySelector('.slider-dots'), //обвёртка точек
	dot = document.getElementsByClassName('dot'); //массив точек



function showSlides(n){ //скрываем показуем слайды и точки
	if (n >= slides.length) {
		slideIndex = n = 0;
	}
	if (n < 0) {
		slideIndex = n = slides.length - 1;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('dot-active');
	}
	slides[n].style.display = 'block';
	dot[n].classList.add('dot-active');
};
showSlides(0);//показуем вначале 0 слайд

prev.addEventListener('click', () => { //переключение кнопками
	slideIndex--;
	showSlides(slideIndex);
	clearInterval(timeOut);
});
next.addEventListener('click', () => { 
	slideIndex++;
	showSlides(slideIndex);
	clearInterval(timeOut);
});

dotsWrap.addEventListener('click', (event) => { //переключение точками
	for (let i = 0; i < dot.length; i++) {
		if (event.target == dot[i]) {
			clearInterval(timeOut);
			showSlides(i);
		}
	}
});
let time = () => { //автоматическое пролистование слайдов
	slideIndex++;
	showSlides(slideIndex);
}
let timeOut = setInterval(time, 2000);*/
									

									//калькулятор на сайте
									//мой калькулятор
/*let priceWrap = document.querySelector('#price'),
	input = document.getElementsByClassName('counter-block-input'),
	select = document.getElementById('select'),	
	total = document.getElementById('total'),
	selected = document.getElementsByClassName('aaa');


function calcTotal(day, people, country, price) {
	if ( day < 1 || people < 1) {
		price.textContent = 0;
	} else {
		price.textContent = day.value * people.value * country.value;
	}
};

function price (elementToChange) {
	priceWrap.addEventListener('change', (event) => {
		for (let i = 0; i < selected.length; i++) {
			if (selected[i] == event.target) {
				calcTotal(input[0], input[1], select, total);
			}
		}
	});
};
price(priceWrap);*/

/*let  persons = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;
	
	persons.addEventListener('focus', function() {
		totalValue.classList.remove('fade');
	});
	restDays.addEventListener('focus', function() {
		totalValue.classList.remove('fade');
	});
	place.addEventListener('mouseenter', function() {
		totalValue.classList.remove('fade');
	});

	persons.addEventListener('change', function() {
		totalValue.classList.add('fade');
		personSum = this.value;
		total = (daysSum * personSum) * 4000;
		if (restDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});
	restDays.addEventListener('change', function() {
		totalValue.classList.add('fade');
		daysSum = this.value;
		total = (daysSum * personSum) * 4000;
		if (persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});
	place.addEventListener('change', function(){
		totalValue.classList.add('fade');
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		}	else {
			total = (daysSum * personSum) * 4000 * this.value;
			totalValue.innerHTML = total;	
		}
	});

});
*/