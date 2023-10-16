(function(){

    const sliders =[...document.querySelectorAll('.more-info__body')];
    const buttonBefore = document.querySelector('#before')
    const buttonNext = document.querySelector('#next')
    
    let value;

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    const changePosition = (add) => {
        const currentSlide = document.querySelector('.more-info__body--show').dataset.id;
        
        value = Number(currentSlide);
        value += add;
        
        sliders[Number(currentSlide)-1].classList.remove('more-info__body--show')
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('more-info__body--show');
    }
})();