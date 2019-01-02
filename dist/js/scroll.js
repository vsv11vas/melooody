window.addEventListener('DOMContentLoaded', () => {
	let nav = document.querySelector('.navigation');
	let header = document.querySelector('.header');
	window.addEventListener('scroll', () => {
		let scrolled = window.pageYOffset;
		if(scrolled > 146){
			nav.classList.add('fixed');
			header.style.marginBottom = '88px';
		}else{
			nav.classList.remove('fixed');
			header.style.marginBottom = '30px';
		}
	});
});