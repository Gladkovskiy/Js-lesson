/*								//DOM
//методы поиска
let box = document.getElementById('box'),
	 button = document.getElementsByTagName('button'),
	 circle = document.getElementsByClassName('circle'),
	 heart = document.querySelectorAll('.heart'),
	 oneHeart = document.querySelector('.heart')

console.log(box);
console.log(button[0]);
console.log(circle[1]);
console.log(heart[1]);
console.log(oneHeart);

//изменять стили элементов
box.style.color = 'red';
box.style.backgroundColor = '#373737';
button[0].style.width = '100px';
button[0].style.height = '50px';
button[0].style.backgroundColor = 'green';
button[0].style.borderRadius = '50%';

//основные методы для работы в элементами на странице
//создание элемента
let div = document.createElement('div');
//создать текстовый узел
let text = document.createTextNode('Тут был я');
//добавление, удаление происходит через classList
div.classList.add('black');
//добавить элемент на страницу appendChild - добавляет в конец родителя
document.body.appendChild(div);
//добавление элемента перед определнным эелементом
document.body.insertBefore(div, circle[2]);
//удаление элемента со страницы
document.body.removeChild(heart[2]);
//замена элемента на странице
document.body.replaceChild(circle[1], button[0]);
//добавление текста в тег
div.innerHTML = 'СТРАНА ТАК СЕБЕ';
//добавить только текст, если вдруг гдето вводится с экрана
div.textContent = 'СТРАНА ТАК СЕБЕ';
*/

