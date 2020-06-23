// swiper
const swiper = new Swiper ('.swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: '.swiper-custom-pagination',
        type: 'custom'
    }
});


// pagination items creating
const photosQuantity = document.getElementsByClassName('swiper-slide').length;
const swiperPaginationContainer = document.getElementsByClassName('swiper-pagination-custom')[0];

if (photosQuantity < 2) {
    swiperPaginationContainer.style.display = 'none';
}

for (let i = 0; i < photosQuantity; i++) {
    const swiperPaginationItem = document.createElement('div');
    swiperPaginationItem.className = 'swiper-pagination-item';
    swiperPaginationItem.style.width = 'calc(' + 100 / photosQuantity + '% - 3px)';
    swiperPaginationContainer.appendChild(swiperPaginationItem);
}


// setting active pagination item
let activePaginationItemIndex = 0;

setActivePaginationItem();

swiper.on('slideNextTransitionEnd', () => {
    activePaginationItemIndex++;
    setActivePaginationItem();
});

swiper.on('slidePrevTransitionEnd', () => {
    activePaginationItemIndex--;
    setActivePaginationItem();
});

function setActivePaginationItem() {
    const items = document.getElementsByClassName('swiper-pagination-item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    items[activePaginationItemIndex].classList.add('active');

};
