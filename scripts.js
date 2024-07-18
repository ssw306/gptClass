document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('더 읽기 버튼이 클릭되었습니다!');
        });
    });
});
// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 3000); // 3초마다 자동으로 슬라이드 전환

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header {
    background: #87CEEB; /* 연한 하늘색 */
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
}

.slideshow-container {
    position: relative;
    max-width: 100%;
    margin: auto;
}

.slide {
    display: none;
}

img {
    vertical-align: middle;
}

.fade {
    animation: fade 1.5s;
}

@keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
}

article {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

footer {
    background: #87CEEB; /* 연한 하늘색 */
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
}