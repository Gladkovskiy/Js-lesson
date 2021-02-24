/*// добавить в структуру
option.bool = false;
//удалить c объекта
delete option.bool
// перебор элементов в объекте
for(let key in options){
	значение options [key]
}
// ..количетсво свойств в объекте
Object.keys(options).length;

//удаление с массива последнего элемента
arr.pop();
//добавляет в конце массива элемент со значением в скобках
arr.push(6);
//удаляет первый элемннт массива
arr.shift();
//добавялет первый элемнт массива
arr.unshift('4');
//перебор без for
arr.array.forEach( function(element, index) {
	// statements
});
//заполнение массива со строки, разделение элементов через запячтую
arr = i.split(',');
//запись массива в строку, каждый элемент запишется через запятую 
i = arr.join(',');
//сортировка массива по алфовиту
arr.sort();
//сортировка массива по числам
arr.sort(sortNumber);
function sortNumber (a,b) {
	return a - b
}
//наследование свойств через прототип
let soldier = {
	health: 400,
	armor: 100
}
let john = {
	health: 100
}
join.__proto__ = soldier; //john.armor = 100 -- наследует свойства!!!*/