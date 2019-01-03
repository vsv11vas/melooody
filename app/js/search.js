window.addEventListener('DOMContentLoaded', () => {
	let searchBar = document.querySelector('.search-bar');
	let searchString = document.querySelector('.search-string');
	let alphaString = document.querySelector('.alpha-string');
	let langButton = document.querySelectorAll('.languages-button');

    let i = 0;


	let openButton = document.querySelector('.open-button');
	let menu = document.querySelector('.main-menu');
	let j = 0;
	openButton.addEventListener('click', () => {
		openButton.classList.toggle('active');
		if(j % 2 == 0){
			menu.style.display = 'block';
		}else{
			menu.style.display = 'none';
		}
		j++;
	});

});

