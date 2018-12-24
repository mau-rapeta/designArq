
// scroll animation 

$('.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// Activador del Lightbox de la sección de Instalaciones

$('.image-link').magnificPopup({
    type: 'image',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function(){
            this.st.image.markup = 
            this.st.image.markup.replace('mfp-figure',
        'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    image: {
        verticalFit: true
    },
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
    }
});

// Activador del Lightbox de la galeria

$('.image-link').magnificPopup({
    type: 'image',
    removalDelay: 100,
    callbacks: {
        beforeOpen: function(){
            this.st.image.markup = 
            this.st.image.markup.replace('mfp-figure',
        'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    image: {
        verticalFit: true
    },
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
    }
});

// Zoom del plano

$('.image-link-zoom').magnificPopup({
    type: 'image',
    removalDelay: 100,
    callbacks: {
        beforeOpen: function(){
            this.st.image.markup = 
            this.st.image.markup.replace('mfp-figure',
        'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    image: {
        verticalFit: true
    },
    gallery: {
        enabled: false
    }
});

// Desplegue del menú Mobile

$(document).ready(main);

var contador = 1;

function main(){
    $('#showLeft, .navLink').click(function(){
        if(contador == 1){
            $('.navMob').animate({
                left: '0'
            });
            contador = 0;
        }else{
            contador = 1;
            $('.navMob').animate({
                left: '-100%'
            });
        }
    });
};
