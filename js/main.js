jQuery(document).ready(function ($) {
    var selectedItem;
    
    $(".gallery li").click(function () {
        selectedItem = $(this);
        $(".modal-content img").fadeOut(500, function() {
          $('.modal-content img').attr('src',selectedItem.find('img').attr('src'));
         $(".modal-content img").fadeIn(500);
         });
		 
		 $(".modal-content, #modal-background").fadeIn();
		 
		  $('.modal-content').css({
	   	'top':($(window).height() - $('.modal-content').outerHeight()) / 2,
	        'left':($(window).width() - $('.modal-content').outerWidth()) / 2
	   });
	   
        }); 

    $(".modal-close").click(function () {
        $(".modal-content, #modal-background").fadeOut();
    });

    $('.btnModal-right').click(function () {
        selectedItem.next().find('img').trigger('click');
    });

    $('.btnModal-left').click(function (){
        selectedItem.find('img').end().prev().find('img').trigger('click');
    });
});