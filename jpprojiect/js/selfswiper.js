window.onload=function(){
			
	
		$('.close').click(function() {
				sessionStorage.removeItem("imglist");
				window.history.go(-1);
			});

			var bodyheight = $(window).height();
			var bodywidth = $(window).width();
			$('.main').css('width', `${bodywidth}px`);
			$('.main').css('min-height', `${bodyheight}px`);
			var h1=bodyheight-$('.headbar').height()*2;
			$('.center').css('height',`${h1}px`).css('overflow','scroll');
			var imgstring = sessionStorage.getItem("imglist");
			var imglist = JSON.parse(imgstring);
			var total = imglist.length;
			$('.total').html(`${total}`);
			console.log(imglist);
			
//			for(var i = 0; i <imglist.length; i++) {
//				var swipercontent = $(`<div class="swiper-slide"><div class="swiper-zoom-container"><img data-src="${imglist[i].url}" class="swiper-lazy"><div class="swiper-lazy-preloader"></div></div></div>`);
//				swipercontent.appendTo($('.swiper-wrapper'));
//			}
			
			for(var i = 0; i <imglist.length; i++) {
				var swipercontent = $(`<div class="swiper-slide"><div class="swiper-zoom-container"><img data-src="${imglist[i].url}" class="showimg"></div></div>`);
				swipercontent.appendTo($('.swiper-wrapper'));
			}

			$('.showimg').css('width', `${bodywidth}px`).css('height','50rem');
			
			var nowindex = null;
			var swiper = new Swiper('.swiper-container', {
				zoom: true,
				on: {
					slideChangeTransitionEnd: function() {
						nowindex = this.activeIndex + 1;
						$('.nowindex').html(`${nowindex}`);
					} //切换结束时，告诉我现在是第几个slide
				}			
			});

			$('.swiper-button-prev').click(function() {
				swiper.slidePrev();
			});
			$('.swiper-button-next').click(function() {
				swiper.slideNext();
			});
}