$(document).ready(function() {
    
    // Rolagem suave para os links internos da página
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800); // 800 milissegundos é a velocidade da animação
        }
    });

    // Efeito sutil de fade-in nas caixas de benefícios ao rolar a página
    $(window).scroll(function() {
        $('.benefit-card').each(function() {
            var boxTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > boxTop + 50) {
                $(this).animate({'opacity':'1'}, 500);
            }
        });
    });

});