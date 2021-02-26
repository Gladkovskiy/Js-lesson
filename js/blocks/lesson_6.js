							// события

// let btn = document.getElementsByTagName('button');
// let overlay = document.querySelector('.overlay');
// let link = document.getElementsByTagName('a')[0];

//устаревшее решение
/*btn[0].onclick = function () {
	alert('Button');
}*/

//правильное написание событий
//при клике на эелемент
/*btn[0].addEventListener('click', function () {
	alert('Button');
	alert('Button1');
});

// при наведении мышки
btn[1].addEventListener('mouseenter', function () {
	btn[1].style.color = 'red';
});

//при отведении мышки
btn[1].addEventListener('mouseleave', function () {
	btn[1].style.color = 'black';
});

//можно получить тип события которое произошло и на каком элементе
btn[2].addEventListener('mouseleave', function (event) {
	console.log(event.type + ' на ' + event.target);
});

//если событие висит и на родителе то будут всплывать события от внутреннего к внешнему

overlay.style.padding = '30px';
overlay.addEventListener('mouseenter', function (event) {
	console.log(event.type + ' на ' + event.target);
});

//Отменастандартного поведения браузера, !!!используется на кнопках в формах!!!
link.addEventListener('click', function (event) {
	event.preventDefault();
	console.log(event.type + ' на ' + event.target);
});
*/