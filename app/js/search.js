window.addEventListener('DOMContentLoaded', () => {

	let openButton = document.querySelector('.open-button');
	let menu = document.querySelector('.main-menu');
	let j = 0;
	openButton.addEventListener('click', () => {
		openButton.classList.toggle('active');
		if(j % 2 == 0){
			menu.style.display = 'block';
			openButton.innerHTML = 'Закрыть меню'
		}else{
			menu.style.display = 'none';
			openButton.innerHTML = 'Открыть меню'
		}
		j++;
	});

});

