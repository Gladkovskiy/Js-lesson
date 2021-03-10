/*document.addEventListener('DOMContentLoaded', () => {
//класс для создания тега в HTML, со своими css свойствами
	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		appDiv(text) {
			let div = document.createElement('div');
			document.body.appendChild(div);
			div.innerHTML = text;
			div.style.cssText = `height: ${this.height}; width: ${this.width}; 
			background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`; //устанавливаем целый ряд свойств без css
			let divInBody = document.getElementsByTagName('div')[0];
			console.log(getComputedStyle(divInBody).backgroundColor); //считываем css свойство любого объекта
		}
	}

	let newDiv = new Options('200px', '200px', 'red', '2rem', 'center');
	newDiv.appDiv('HAHAHAHA');
});

*/