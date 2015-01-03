/*!
* Forminator T100: Protect all your form inputs from bad internet connections and an angry John Connor
* @requires Jquery v1.4 or above
*
* Copyright (c) 2012 Frank M. Taylor
* Dual licensed under MIT and GPL licenses 
* http://opensource.org/licenses/MIT
* http://www.gnu.org/licenses/gpl.html
* version 0.1.0
*/
/*
*   USAGE
*   1. apply .forminator() to any form
*   2. include optional arguments for which selectors you want, whether we store on name or id, and clear button
*/

;(function ( $ ) {
    $.fn.forminator = function(storedFields, storageKey, clearButton) {
        form = this;
        storageKey = storageKey !== undefined ? storageKey : this.name || this.id;    
        //LOAD FORM DATA
        $(document).on('load', function () {
            $(form).children(storedFields).each(function (i, el) {
                var key = $(this).attr('name') || $(this).attr('id'),
                    value = localStorage.getItem(key);
                $(el).val(value).trigger('change');
            });

        });
        // CAPTURE FORM DATA
        $(form).children(storedFields).on('keyup change blur', function () { 
            var key = $(this).attr('name') || $(this).attr('id'),
                value = $(this).val();
            localStorage.setItem(key, value);
            currentval = $(this).val();
        });
        //use this for the input slider - since it doesn't use the keyboard
        $(form).children('[type="range"]').mousemove(function () {
            var name = $(form).attr("id") +"-"+ $(this).attr(storageKey),
                value = $(this).val();
            localStorage.setItem(name, value);
            currentval = $(this).val();
        });

        if (clearButton) {
            $(clearButton).on('click', function () {
                localStorage.clear();    
            });
        }
    }
})(jQuery);