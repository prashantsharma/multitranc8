;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jQuery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jQuery'));
  } else {
    root.jquery_tinydot_min_js = factory(root.jQuery);
  }
}(this, function(jQuery) {

!function(a,b){function c(b){var c=b.children();if(0==c.length){var d=a(b).html();return b.html(""),b.append("<span />"),b.children("span").html(d)}return c[0]}function d(b){a(b.child).html(b.orgContent),e(b)}function e(b){for(var c=a(b).height();a(b.child).outerHeight()>c;)a(b.child).html(function(a,b){return b.replace(/\W*\s(\S)*$/,"...")})}a.fn.tinydot||(a.fn.tinydot=function(b){var f=this;f.child=c(f),f.orgContent=a(f.child).html(),e(f),f.watch=function(){return a(window).on("resize",function(){h&&clearInterval(h),h=setTimeout(function(){d(f)},100)}),f};var g=a.extend(!0,{},a.fn.tinydot.defaults,b),h=null;g.watch&&f.watch()},a.fn.tinydot.defaults={watch:!1})}(jQuery),jQuery(document).ready(function(a){a(".text-truncate").each(function(){var b=a(this).hasClass("text-truncate-resize"),c=new Object;b&&(c.watch="window"),a(this).tinydot(c)})});

return true;
}));
