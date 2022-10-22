const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCounter = mainSlide.querySelectorAll('div');
const container = document.querySelector('.container')
sidebar.style.top = `-${(slidesCounter.length - 1) * 100}vh` // спускаем вниз до нужного слайда , -1 так как если спустим на всё кол-во, то будет белый экран
let activeSlideIndex = 0;
upBtn.addEventListener('click', (() => {
	changeSlide('up')
}));

downBtn.addEventListener('click', (() => {
	changeSlide('down')
}))


function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCounter.length) {
			activeSlideIndex = 0
		}


	}
	else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCounter.length - 1
		}
	}
	const height = container.clientHeight;
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}