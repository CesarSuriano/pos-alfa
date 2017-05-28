jQuery.fn.myPlugin = function() {
    $(this).after("<br>" + $(this).attr('alt'));
}