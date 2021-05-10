const navList = document.querySelector('.nav__list'),
        mobileBtn = document.querySelector('.mobile__menu');

    mobileBtn.addEventListener('click', (e) => {
        e.preventDefault();

        navList.classList.toggle('show');
    });
