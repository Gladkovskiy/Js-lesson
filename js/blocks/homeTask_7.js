// window.addEventListener('DOMContentLoaded', () => {

	/*let tab =  document.getElementsByClassName('info-header-tab'),
		 tabContetnt = document.getElementsByClassName('info-tabcontent'),
		 info = document.getElementsByClassName('info-header')[0];

//показываем начальный контент первого таба
	function hideTabContant(a){
		for (let i = a; i < tabContetnt.length; i++) {
			tabContetnt[i].classList.remove('show1');
			tabContetnt[i].classList.add('hide1');		
		}
	}
	hideTabContant(1);
//показываем тот контент котоырй выбран
	function showTabContent(b) {
		if(tabContetnt[b].classList.contains('hide1')) {
			hideTabContant(0);
			tabContetnt[b].classList.remove('hide1');
			tabContetnt[b].classList.add('show1');
		}
	}
// по делигированию, опеределяем на какой таб нажато и передаём его номер
	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});*/

/*let link = document.querySelector('.main-block-link');
let angle = 0;
function scaleLink(){
	angle += 0.1;
	link.style.transform = 'rotate(' + angle + 'deg)';
	requestAnimationFrame(scaleLink);
}
requestAnimationFrame(scaleLink);*/

							//мой вариант
/*let tab = document.querySelectorAll('.info-header-tab'),
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
});*/

// });
