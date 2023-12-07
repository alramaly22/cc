var swiperTestimonial = new Swiper(".testimonial__container ",{
    spaceBetween:24,
    loop:true,
    grabCursor:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
breakpoints:{
    576: {
        slidesPerView:2,
        // spaceBetween:20,
    },
    768: {
        slidesPerView:3,
        spaceBetween:29,
    },
   
},
// autoplay: {
//     delay: 2000, 
// },
    });