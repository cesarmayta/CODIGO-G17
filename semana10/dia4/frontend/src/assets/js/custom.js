/* ----------------- Start Document ----------------- */
(function ($) {
    "use strict";

    $(document).ready(function () {


        /*--------------------------------------------------*/
        /*  Tippy JS 
        /*--------------------------------------------------*/
        /* global tippy */
        tippy('[data-tippy-placement]', {
            delay: 100,
            arrow: true,
            arrowType: 'sharp',
            size: 'regular',
            duration: 200,

            // 'shift-toward', 'fade', 'scale', 'perspective'
            animation: 'shift-away',

            animateFill: true,
            theme: 'dark',

            // How far the tooltip is from its reference element in pixels 
            distance: 10,

        });

        // ------------------ End Document ------------------ //
    });

})(this.jQuery);
