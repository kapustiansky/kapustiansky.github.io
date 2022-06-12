window.onload = function () {
	(function () {
		const fadeInX = (el) => {
			gsap.to(el, 1, {
				opacity: 1,
				x: 0,
				ease: 'power4.out',
			});
		};

		const fadeOutX = (el) => {
			gsap.to(el, 1, {
				opacity: 0,
				x: 60,
				ease: 'power4.out',
			});
		};

		const fadeInY = (el) => {
			gsap.to(el, 1, {
				opacity: 1,
				y: 0,
				ease: 'power4.out',
			});
		};

		const fadeOutY = (el) => {
			gsap.to(el, 1, {
				opacity: 0,
				y: 60,
				ease: 'power4.out',
			});
		};

		const fadeInXRev = (el) => {
			gsap.to(el, 1, {
				opacity: 1,
				x: 0,
				ease: 'power4.out',
			});
		};

		const fadeOutXRev = (el) => {
			gsap.to(el, 1, {
				opacity: 0,
				x: -60,
				ease: 'power4.out',
			});
		};

		gsap.registerPlugin(ScrollTrigger);
		let animationTop = document.querySelectorAll('.animation-top');
		animationTop.forEach((i) => {
			fadeOutY(i);
			ScrollTrigger.create({
				trigger: i,
				start: 'top 90%',
				end: 'bottom 10%',
				onEnter: (self) => fadeInY(self.vars.trigger),
				onLeave: (self) => fadeOutY(self.vars.trigger),
				onEnterBack: (self) => fadeInY(self.vars.trigger),
				onLeaveBack: (self) => fadeOutY(self.vars.trigger),
			});
		});

		let animationText = document.querySelectorAll('.animation-text');
		animationText.forEach((i) => {
			fadeOutX(i);
			ScrollTrigger.create({
				trigger: i,
				start: 'top 90%',
				end: 'bottom 10%',
				onEnter: (self) => fadeInX(self.vars.trigger),
				onLeave: (self) => fadeOutX(self.vars.trigger),
				onEnterBack: (self) => fadeInX(self.vars.trigger),
				onLeaveBack: (self) => fadeOutX(self.vars.trigger),
			});
		});

		let animationTextRev = document.querySelectorAll(
			'.animation-text-revers'
		);

		animationTextRev.forEach((i) => {
			fadeInXRev(i);
			ScrollTrigger.create({
				trigger: i,
				start: 'top 90%',
				end: 'bottom 10%',
				onEnter: (self) => fadeInXRev(self.vars.trigger),
				onLeave: (self) => fadeOutXRev(self.vars.trigger),
				onEnterBack: (self) => fadeInXRev(self.vars.trigger),
				onLeaveBack: (self) => fadeOutXRev(self.vars.trigger),
			});
		});

		////////////////////!

		ScrollTrigger.create({
			trigger: '.reviews-image-double',
			start: 'center center',
			end: 'center center',
			onEnter: (self) => {
				let el = self.trigger.querySelectorAll('.animation-rotate');
				el.forEach((i, index) => {
					let rotate = index == 0 ? 4 : index == 1 ? -6 : -8;
					gsap.to(i, 1, {
						rotate: rotate,
						ease: 'sine.out',
					});
				});
			},
			onEnterBack: (self) => {
				let el = self.trigger.querySelectorAll('.animation-rotate');
				el.forEach((i, index) => {
					let rotate = index == 0 ? -4 : index == 1 ? 6 : 8;
					gsap.to(i, 1, {
						rotate: rotate,
						ease: 'sine.out',
					});
				});
			},
		});

		////////////////////!

		let head = document.querySelector('header');
		if (head) {
			if ((window.oldScrollY = window.scrollY) > 0) {
				head.classList.add('bg-orange');
			}

			window.oldScrollY = window.scrollY;
			document.onscroll = (e) => {
				let res = window.oldScrollY > window.scrollY ? 1 : 2;
				window.oldScrollY = window.scrollY;

				if (res == 2) {
					head.style.transform = 'translateY(-100%)';
				} else if (res == 1 && window.scrollY == 0) {
					head.style.transform = 'translateY(0)';
					head.classList.remove('bg-orange');
				} else {
					head.style.transform = 'translateY(0)';
					head.classList.add('bg-orange');
				}
			};
		}

		////////////////////!

		let dods = document.querySelectorAll('.slider-dod');
		if (dods.length > 0) {
			dods.forEach((i) => {
				i.addEventListener('click', (e) => {
					alert(
						"Perhaps you expected to see the work of the slider, but I'm lazy and there are a lot of sliders (you can evaluate the work with sliders in my portfolio - I use Swiper more often). There are many options for animation - the main thing is fantasy."
					);
				});
			});
		}

		////////////////////!

		let spoilers = document.querySelectorAll('.spoiler-title');
		let spoilerText = document.querySelectorAll('.spoiler-text');
		if (spoilers.length > 0) {
			spoilerText.forEach((i, index) => {
				if (index == 0) {
					i.style.height = `${i.scrollHeight}px`;
					spoilers[0].lastChild.classList.add('rotate-180');
				} else {
					i.style.height = 0;
				}
			});

			spoilers[0].lastChild.classList.add('rotate-180');
			spoilers.forEach((i) => {
				i.addEventListener('click', (e) => {
					spoilerText.forEach((i) => {
						i.style.height = 0;
						i.previousElementSibling.lastChild.classList.remove(
							'rotate-180'
						);
					});

					i.lastChild.classList.add('rotate-180');
					i.nextElementSibling.style.height = `${i.nextElementSibling.scrollHeight}px`;
				});
			});
		}

		////////////////////!

		const animateValue = (obj, start, end, duration) => {
			let startTimestamp = null;
			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min(
					(timestamp - startTimestamp) / duration,
					1
				);
				obj.innerHTML = `${Math.floor(
					progress * (end - start) + start
				)}`;
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		};

		const counterStartAnimation = () => {
			let counterItems = document.querySelectorAll('.count-item');
			counterItems.forEach((i) => {
				let start = parseInt(i.innerText) - 12;
				let end = parseInt(i.innerText);
				animateValue(i, start, end, 500);
			});
		};

		ScrollTrigger.create({
			trigger: '.re-online__counter-container',
			start: 'top 90%',
			end: 'bottom 10%',
			onEnter: () => counterStartAnimation(),
			onEnterBack: () => counterStartAnimation(),
		});
	})();
};
