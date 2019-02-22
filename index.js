function catCarousel() {
    $('.thumbnails').on('click', 'img' function (event) {
        const targetCat = $(event.currentTarget);
        const otherCat = $('.thumbnails').not(targetCat);
    })
}