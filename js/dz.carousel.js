(function($) { 
	"use strict";

/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
	
	/* image-carousel no margin function by = owl.carousel.js */
	jQuery('.owl-slider').owlCarousel({
		loop:true,
		autoplay:true,
		responsive:true,
		animateOut: 'fadeOut',
		margin:0,
		nav:false,
		dots: true,
		autoplaySpeed: 500,
		navSpeed: 500,
		paginationSpeed: 500,
		slideSpeed: 500,
		navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			1024:{
				items:1
			},
			1200:{
				items:1
			}
		}
	})
	
		
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel-2 function by = owl.carousel.js */
	jQuery('.blog-carousel2').owlCarousel({
		loop:true,
		autoplay:true,
		margin:50,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.gallery-carousel').owlCarousel({
		loop:false,
		autoplay:true,
		margin:30,
		nav:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		dots: false,
		navText: ['', ''],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.team-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		dots: false,
		navText: ['', ''],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.client-carousel').owlCarousel({
		loop:true,
		autoplay:false,
		margin:0,
		nav:true,
		autoplaySpeed: 1500,
		navSpeed: 1500,
		paginationSpeed: 1500,
		slideSpeed: 1500,
		dots: false,
		navText: ['', ''],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			991:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*  Testimonial post Carousel function by = owl.carousel.js */
	jQuery('.testimonial-carousel').owlCarousel({
		loop:true,
		autoplay:false,
		margin:20,
		nav:true,
		autoplaySpeed: 1500,
		navSpeed: 1500,
		paginationSpeed: 1500,
		slideSpeed: 1500,
		dots: false,
		navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			991:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
});
/* Document .ready END */

	
})(jQuery);	