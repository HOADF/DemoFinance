// Отправка формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Отправка опроса
document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Благодарим за заполнение опроса! Наш специалист свяжется с вами выбранным способом.');
    this.reset();
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация появления секций при прокрутке
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
});
