(function () {
	window.oldScrollY = window.scrollY;
	document.onscroll = () => {
		let res = window.oldScrollY > window.scrollY ? 1 : 2;
		window.oldScrollY = window.scrollY;

		if (res == 2 && window.scrollY > 100) {
			document.querySelector('header').classList.add('header-onscroll');
		} else if (res == 1 && window.scrollY < 250) {
			document
				.querySelector('header')
				.classList.remove('header-onscroll');
		}
	};
})();

(function () {
	document.querySelectorAll('.auto-focus').forEach((el) => {
		el.addEventListener('click', (e) => {
			document.getElementById('email-address').focus();
		});
	});

	document.querySelector('.submenu-btn').addEventListener('click', (e) => {
		document.querySelector('.submenu').classList.toggle('submenu-visible');
	});

	document.querySelector('.login-btn').addEventListener('click', (e) => {
		document
			.querySelector('.login-cont')
			.classList.toggle('ligin-form-visible');
	});

	document
		.querySelector('.login-cont-close')
		.addEventListener('click', (e) => {
			document
				.querySelector('.login-cont')
				.classList.toggle('ligin-form-visible');
		});
})();
