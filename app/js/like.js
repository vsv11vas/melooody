window.addEventListener('DOMContentLoaded', () => {
	let likes = document.querySelectorAll('.artist-like');

	likes.forEach( function(el) {
		el.addEventListener('click', () => {
			el.classList.add('active');
		});
	}); 
});