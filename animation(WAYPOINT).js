//Анімація в дві сторони: при скроллі вниз і вверх
//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animation('fadeInLeft', 'fadeOutLeft');
//Author Pazhukh Yaroslav

(function($) {
    $.fn.animation = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this.element).removeClass(outEffect).addClass(inEffect).css('opacity', 1);
            } else {
                $(this.element).removeClass(inEffect).addClass(outEffect).css('opacity', 1);
            };
        }, {
            offset: "80%"
        });

        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "up") {
                $(this.element).removeClass(outEffect).addClass(inEffect).css('opacity', 1);
            } else {
                $(this.element).removeClass(inEffect).addClass(outEffect).css('opacity', 1);
            };
        }, {
            offset: function () {
                return -$(window).height()
            }
        });
                
    };
})(jQuery);