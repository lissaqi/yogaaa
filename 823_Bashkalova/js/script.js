const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}


    function history_back() {
        window.history.back();
    }


    let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');

hamburger.addEventListener('click', function(e) {
	e.stopPropagation();
	nav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
	if (!nav.contains(e.target)) {
		nav.classList.remove('active');
	}
});


  let image = document.getElementById('first');
  image.addEventListener('mouseover', function() {
    image.src = './img/5213479463260197269-fotor-bg-remover-20251124113345.png';
  });

  image.addEventListener('mouseout', function() {
    image.src = './img/pilates_2983012.png';
  });
  
  let image1 = document.getElementById('second');
  image1.addEventListener('mouseover', function() {
    image1.src = './img/5215731263073880847-fotor-bg-remover-2025112411365.png';
  });

  image1.addEventListener('mouseout', function() {
    image1.src = './img/pilates(1).png';
  });

   let image2 = document.getElementById('third');
  image2.addEventListener('mouseover', function() {
    image2.src = './img/5213479463260197267-no-bg-preview (carve.photos)-fotor-bg-remover-20251124113543.png';
  });

  image2.addEventListener('mouseout', function() {
    image2.src = './img/pilates.png';
  });
