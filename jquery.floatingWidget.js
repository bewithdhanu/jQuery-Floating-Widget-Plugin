(function ($) {
    $.fn.floatingWidget = function (gap, initialX = 0, initialY = 0) {
        const $target = $(this);
        let x = initialX || 0;
        let y = initialY || 0;
        let following = false;

        // Set the initial position of the div
        $target.css({left: x + 'px', top: y + 'px', transition: 'left 0.1s ease-out, top 0.1s ease-out'});
        $target.hide()
        const refreshPosition = function (newX, newY) {
            if (following) {
                x = newX - $target.width() - gap;
                y = newY - $target.width() - gap;

                // Check if there is enough space at the bottom, if not, move to the top
                if (y < 0) {
                    y = newY + gap;
                }

                // Check if there is enough space on the right, if not, adjust the position
                if (x < 0) {
                    x = newX + gap;
                }

                // Set the position of the div with smooth animation
                $target.css({left: x + 'px', top: y + 'px'});
            }
        };

        return {
            refreshPosition: refreshPosition,
            stopFollow: function () {
                this.show();
                following = false;
            },
            startFollow: function () {
                this.show();
                following = true;
            },
            show: function () {
                $target.show();
            },
            hide: function () {
                this.stopFollow()
                $target.hide();
            },
            isVisible: function () {
                return $target.is(':visible');
            }
        };
    };
})(jQuery);
