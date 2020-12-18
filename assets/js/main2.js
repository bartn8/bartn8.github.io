jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    //i18n loading

    $.i18n().load({
        'en': 'assets/i18n/en.json',
        'it': 'assets/i18n/it.json'
      }).done(function() {
        $('title').text($.i18n('title'));
      });
    

});