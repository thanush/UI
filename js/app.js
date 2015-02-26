/*$(document).ready(function(){
	//var classes = '.fa-main','.fa-pro';
	//var dclass = '.main-wrap','.products';
				//'.products';
	$('.fa-main').on('click',function(){
		//$(dclass).fadeOut();
		$('.main-wrap').addClass("animated fadeOut");
	});
	$('.fa-pro').on('click',function(){
		//$(dclass).fadeOut();
		$('.products').addClass("animated fadeOut");
	});
	$('.fa-pro').on('click',function(){
		//$(dclass).fadeOut();
		$('.products').addClass("animated fadeOut");
	});
	$('.fa-smart').on('click',function(){
		//$(dclass).fadeOut();
		$('.smartspend').addClass("animated fadeOut");
	});
	$('.fa-auth').on('click',function(){
		//$(dclass).fadeOut();
		$('.author').addClass("animated fadeOut");
	});
	$('.fa-quick').on('click',function(){
		//$(dclass).fadeOut();
		$('.quick').addClass("animated fadeOut");
	});
});
*/
(function($){
	$.fn.modal = function(){

		this.on('click',function(){
			var self = $(this);
				//console.log(self.data('content'));
				if(self.data('content') == 'something'){
					$('.main-wrap').addClass('pop-main animated zoomInLeft');
					$('.pop').addClass('pop-up');
				};
				if (self.data('content') == 'products') {
					$('.products').addClass('pop-main animated zoomInLeft top');
					$('.pop').addClass('pop-up');
				};
				if (self.data('content') == 'smartspend') {
					$('.smartspend').addClass('pop-main animated zoomInLeft top');
				//	$('.smartspend-body img').css('height', '1px');
					$('.pop').addClass('pop-up');
				};
				if (self.data('content') == 'author') {
					$('.author').addClass('pop-main animated zoomInLeft top');
					$('.pop').addClass('pop-up');
				};
				if (self.data('content') == 'quick') {
					$('.quick').addClass('pop-main animated zoomInLeft top');
					$('.pop').addClass('pop-up');
				};
		});

	}
})(jQuery);

(function($){
	$.fn.closedup = function(){

		this.on('click',function(){
			var self = $(this);
			//console.log(self);
			if (self.data('content') == 'something') {
				$('.main-wrap').removeClass('pop-main zoomInLeft');	
				$('.pop').removeClass('pop-up');
			};
			if (self.data('content') == 'products') {
				$('.products').removeClass('pop-main zoomInLeft top');	
				$('.pop').removeClass('pop-up');
			};
			if (self.data('content') == 'smartspend') {
				$('.smartspend').removeClass('pop-main zoomInLeft top');	
				$('.pop').removeClass('pop-up');
			};
			if (self.data('content') == 'author') {
				$('.author').removeClass('pop-main zoomInLeft top');	
				$('.pop').removeClass('pop-up');
			};
			if (self.data('content') == 'quick') {
				$('.quick').removeClass('pop-main zoomInLeft top');	
				$('.pop').removeClass('pop-up');
			};
		});
	}
	$.fn.test = function(){
	this.on('click', function(){
		var self =$(this);
		console.log(self.data('content'));
	})
	}
})(jQuery);



