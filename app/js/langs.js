window.addEventListener('DOMContentLoaded', () => {
	let lang = document.querySelectorAll('.languages-button');
	lang.forEach(function(el, i) {
		el.addEventListener('click', () => {
			if(i == 0){
				lang[0].classList.add('active')
				lang[1].classList.remove('active')
			}else{
				lang[0].classList.remove('active')
				lang[1].classList.add('active')
			}
		});
	});
});