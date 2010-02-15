 /*
  * Clearable Text Field - jQuery plugin version 0.3.2
  * Copyright (c) 2009 Tatsuya Ono
  *
  * http://github.com/ono/clearable_text_field
  *
  * Dual licensed under the MIT and GPL licenses:
  *   http://www.opensource.org/licenses/mit-license.php
  *   http://www.gnu.org/licenses/gpl.html
  */
(function(d){d.fn.clearableTextField=function(){if(d(this).length>0){d(this).bind("keyup change paste cut",e);d(this).each(function(){d(this).data("original-padding-right",d(this).css("padding-right"));d(this).data("original-width",d(this).width());c(d(this))})}};function e(){c(d(this),true)}function c(f,g){if(f.val().length>0){b(f,g)}else{a(f,g)}}function b(n,l){if(n.attr("has_clearable_button")!="1"){n.attr("has_clearable_button","1");var g=n.parent();if(!g.hasClass("clear_button_wrapper")){g=n.wrap('<div class="clear_button_wrapper" style="margin:0;padding:0;position:relative; display:inline;" />')}n.after("<div class='text_clear_button'></div>");var i=n.next();var o=i.outerHeight(),k=i.outerHeight();n.css("padding-right",parseInt(n.data("original-padding-right"))+o+1);n.width(n.width()-o-1);var m=n.position();var f={};f.left=m.left+n.outerWidth(false)-(o+2);var j=Math.round((n.outerHeight(true)-k)/2);f.top=m.top+j;i.css(f);i.click(function(){n.val("");c(n);n.change()});if(l&&l!=undefined){n.focus()}}}function a(h,i){var f=h.next();if(h.attr("has_clearable_button")=="1"){h.removeAttr("has_clearable_button");f.remove();var g=f.width();h.css("padding-right",parseInt(h.data("original-padding-right")));h.width(h.data("original-width"))}if(i&&i!=undefined){h.focus()}}})(jQuery);