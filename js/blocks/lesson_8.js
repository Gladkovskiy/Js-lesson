				// урок 8 - параметры документа

// параметры с padding, но без бордера и т.д.
/*let box = document.querySelector('.box'),
	 width = box.clientWidth,
	 height = box.clientHeight;

console.log(width);
console.log(height);*/

// параметры с бордером
/*let widthOffset = box.offsetWidth,
	 heightOffset = box.offsetHeight;

console.log(widthOffset);
console.log(heightOffset);*/

//параметры полностью с длинной и высотой документа в прокрутке
/*let widthScroll = box.scrollWidth,
	 heightScroll = box.scrollHeight;

console.log(widthScroll);
console.log(heightScroll);*/

//по батону разворачиваем наш текст
/*let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', () => {
	box.style.height = box.scrollHeight + 'px';
	box.style.overflow = 'hidden';
	
});*/
// ВСЕ ВЫШЕПЕРЕЧИСЛЕННЫЕ СВОЙСТВА МЕНЯТЬ НЕЛЬЗЯ!!!

/*let btn = document.getElementsByTagName('button')[0],
	 box = document.querySelector('.box');

btn.addEventListener('click', () => {
	console.log(box.scrollTop);
});*/

				//Определение координат элемента, 
/*let btn = document.getElementsByTagName('button')[0],
	 box = document.querySelector('.box');
console.log(box.getBoundingClientRect()); //объект с параметрами*/

//для окна, все вышеперечисленные свойства
/*console.log(document.documentElement.scrollTop); // сколько пролистали
document.documentElement.scrollTop = 0; //можно изменять положение
window.scrollBy(0, 0); //смещнеие по координатам x, y
window.scrollTo(0, 200);//премещение именно к этой координате*/
