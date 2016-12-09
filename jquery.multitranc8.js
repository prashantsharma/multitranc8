(function( $, undef )
{
    if ( $.fn.ellipsis )
    {
            return;
    }

    $.fn.ellipsis = function( o ) {
        
        var $dot = this;
        $dot.child = getChildOrDie($dot);
        $dot.orgContent = $($dot.child).html();
        ellipsis( $dot );

        $dot.watch = function()
        {
            $(window).on('resize', function(){
                if ( watchInt )
                {
                    clearInterval( watchInt );
                }
                watchInt = setTimeout(
                    function()
                    {
                        reinitialize($dot);
                    }, 100
                );
            });
            
            return $dot;
        };
    
        var opts = $.extend( true, {}, $.fn.ellipsis.defaults, o ),
            watchInt = null;

        if ( opts.watch )
        {
            $dot.watch();
        }
    }
    
    // public
    $.fn.ellipsis.defaults = {
        'watch'               : false
    };
    
    function getChildOrDie( $elem )
    {
        var childrens = $elem.children();
        if (childrens.length == 0) {
            // create children
            var data = $($elem).html();
            $elem.html('');
            $elem.append('<span />');
            return $elem.children('span').html(data);
        } else {
            return childrens[0];
        }
    }
    
    function reinitialize( $elem )
    {
        $($elem.child).html($elem.orgContent);
        ellipsis( $elem );
    }
    
    function ellipsis( $elem ) {
        var divh=$($elem).height();
        while ($($elem.child).outerHeight()>divh) {
            $($elem.child).html(function (index, html) {
                return html.replace(/\W*\s(\S)*$/, '...');
            });
        }
    }
    
})( jQuery );

jQuery(document).ready(function($) {
    $(".text-truncate").each(function(){
        var watch_window=$(this).hasClass("text-truncate-resize");
        var x = new Object();
        if (watch_window)
                x.watch='window';
        $(this).ellipsis(x);
    });
});
