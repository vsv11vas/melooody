window.addEventListener('DOMContentLoaded', () => {
	let alphaString = document.querySelector('.alpha-string');
	let languagesButton = document.querySelectorAll('.languages-button');
	let width = document.body.clientWidth;

	if(width < 992 && width >= 768){
		alphaString.classList.add('hidden');
		languagesButton.forEach(function(el){
			el.classList.add('hidden')
		});
		let searchBar = document.querySelector('.search-bar');
		let searchString = document.querySelector('.search-string');
		searchBar.addEventListener('click', () => {
			alphaString.classList.toggle('hidden');
			searchString.classList.toggle('hidden');
			languagesButton.forEach(function(el){
				el.classList.toggle('hidden')
			});
		});
	}
});