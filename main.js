document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
        
        document.getElementById('survey-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Благодарим за заполнение опроса! Наш специалист свяжется с вами в выбранным способом.');
            this.reset();
        });
        
        // Плавная прокрутка к якорям
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
