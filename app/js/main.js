window.addEventListener('DOMContentLoaded', () => {
	let lang = document.querySelectorAll('.languages-button');

	lang.forEach(function(el, i) {
		el.addEventListener('click', () => {
			lang[0].classList.toggle('active');
			lang[1].classList.toggle('active');
		});
	});
});