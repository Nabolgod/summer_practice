document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.featured-movie');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;

    // Функция для показа слайда
    function showSlide(n) {
        // Скрываем все слайды
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.classList.remove('active');
        });
        
        // Убираем активный класс со всех точек
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Корректируем индекс текущего слайда
        currentSlide = (n + slides.length) % slides.length;
        
        // Показываем текущий слайд
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Инициализация - показываем первый слайд
    showSlide(0);

    // Навигация по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Кнопка "Вперед"
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Кнопка "Назад"
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Автопереключение (раскомментируйте если нужно)
    // setInterval(() => {
    //     showSlide(currentSlide + 1);
    // }, 5000);
});