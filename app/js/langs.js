window.addEventListener('DOMContentLoaded', () => {
	let lang = document.querySelectorAll('.languages-button');
	let alpha = document.querySelectorAll('.alpha');
	lang.forEach(function(el, i) {
		el.addEventListener('click', () => {
			alpha.forEach( function() {
				if(i == 0){
					lang[0].classList.add('active')
					lang[1].classList.remove('active')
					alpha[0].classList.remove('hidden')
					alpha[1].classList.add('hidden')
				}else{
					lang[0].classList.remove('active')
					lang[1].classList.add('active')
					alpha[0].classList.add('hidden')
					alpha[1].classList.remove('hidden')
				}
			});
		});
	});
});