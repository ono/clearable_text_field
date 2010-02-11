 /*
  * Clearable Text Field - jQuery plugin version 0.3.1
  * Copyright (c) 2009 Tatsuya Ono
  *
  * http://github.com/ono/clearable_text_field
  *
  * Dual licensed under the MIT and GPL licenses:
  *   http://www.opensource.org/licenses/mit-license.php
  *   http://www.gnu.org/licenses/gpl.html
  */
(function($) {
  $.fn.clearableTextField = function() {
    if ($(this).length>0) {
      $(this).bind('keyup change paste cut', onSomethingChanged);
    
      for (var i=0; i<$(this).length; i++) {
        trigger($($(this)[i]));
      }
    }
  }
  
  function onSomethingChanged() {
    trigger($(this), true);
  }
  
  function trigger(input, set_focus) {
    if(input.val().length>0){
      add_clear_button(input, set_focus);
    } else {
      remove_clear_button(input, set_focus);
    }    
  }
  
  function add_clear_button(input, set_focus) {
    if (!input.next().hasClass('text_clear_button')) {
      var wrap = input.wrap('<div style="margin:0;padding:0;position:relative; display:inline;" />')
      
      // appends div
      input.after("<div class='text_clear_button'></div>");
    
      var clear_button = input.next();
      var w = clear_button.outerHeight(), h = clear_button.outerHeight();
      
      input.css('padding-right', parseInt(input.css('padding-right')) + w + 1);
      input.width(input.width() - w - 1);
          
      var pos = input.position();
      var style = {};  
      style['left'] = pos.left + input.outerWidth(false) - (w+2);
      var offset = Math.round((input.outerHeight(true) - h)/2.0);
      style['top'] = pos.top + offset;
            
      clear_button.css(style);
          
      clear_button.click(function(){
        input.val('');
        trigger(input);
        input.change();
      });
      
      if (set_focus && set_focus!=undefined) input.focus();
    }
  }
  
  function remove_clear_button(input, set_focus) {
    var clear_button = input.next();
    
    if (clear_button.hasClass('text_clear_button')) {
      clear_button.remove();
      var w = clear_button.width();

      input.css('padding-right', parseInt(input.css('padding-right')) - w -1);
      input.width(input.width() + w + 1);
    }

    if (set_focus && set_focus!=undefined) input.focus();
  }
  
})(jQuery);