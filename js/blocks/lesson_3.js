					// Функции

/*function firstFunction(text) {
	alert(text);
}

firstFunction('Привет Тиша')
*/

/*function calc(a,b) { //функция обьявленная в потоке
	return(a*b) //на return функция перестанет работать
}
console.log(calc(4,5)); 
console.log(calc(6,7));

let calc = function(a,b) { //функция обьявленная в переменную, результаты только после объявленияя
	return(a*b) //на return функция перестанет работать
}*/

/*calc = (a,b) => a*b //новый способ объявление функций 
console.log(calc(4,5)); */

// методы - это вспомогательные функции
// свойство - это вспомогательные значения
/*let str = 'Test';
let num2 = 12.2;
let str1 = '14.67'
console.log(str.length); //length - это свойство (без аргументов)
console.log(str.toLowerCase()); //метод для стринга
console.log(Math.round(num2)); // метод - функци я с аргументом
console.log(typeof(parseInt(str1)));
console.log(parseInt(str1));
console.log(parseFloat(str1));*/

//Call-back функции, выполнение функций в определённой последовательности
/*function learnJS (lang, callback) {
	console.log('я учу' + lang);
	callback();
}

learnJS('JavaScript', function (){
	console.log('Я прошёл 3й урок');
});*/


/*//или можно отдельно объявлять функцию
learnJS('Java Script', done);
function done () {
	console.log('Я прошёл 3й урок');
}*/