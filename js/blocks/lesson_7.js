									// урок 7

// запуск функции через определённое время delay в мс	
// let timerId = setTimeout(func, delay)
// отменить таймаут функции
// clearTimeout(timerId)

/*start = () => {
	console.log('задержка выполнения функции');
}
let delay = setTimeout(start, 6000);*/
// clearTimeout(delay);

//циклический запуск функций
// let timerId = setInterval(func, timout) //не учитывает время выполнения фенции и если время выполнения функции больше, то функция будет включатся без задержки 
//рекурсивный вызов функции, когда функция вызывает сама себя, через заданное время, в данном случае 2000мс
/*let  timerId = setTimeout(log, 2000);
function log() {
	console.log('АГА');
	timerId = setTimeout(log, 2000);
}*/

//Пример с приминением интервала для создания анимации
/*let btn = document.querySelector('.btn');

function myAnimation() {
	let elem = document.querySelector('.box'),
		 pos = 0,
		 id = setInterval(frame, 10);
	function frame() {
		if (pos == 396) {
			clearInterval(id)
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}
btn.addEventListener('click', myAnimation);*/

							//Дилигирование!!! очень важно

/*let btns = document.getElementsByTagName('button'),
	 btn_block = document.querySelector('.btn-block');


//на обвёртку вешается событие, а внутри элементы определяются по тэг нейму или другому признаку
btn_block.addEventListener('click', (event) => {
	if (event.target && event.target.tagName == 'BUTTON') {
		console.log('BUTTON');
		}
	if (event.target && event.target.className == 'first') {
		console.log('first');
		}
	if (event.target && event.target.className == 'second') {
		console.log('second');
		}
	if (event.target && event.target.id == 'button3') {
		console.log('button3');
		}
	//популярная и такая проверка, ищет по css селектору
	if (event.target && event.target.matches('.ten')) {
		console.log('ten');
	}
	});*/

	//начало скрипта, для прогрузки структуры страницы
	/*window.addEventListener('DOMContentLoaded', () => {

	});*/