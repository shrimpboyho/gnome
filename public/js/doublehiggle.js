(function ($) {

    function getHTML(imagesrc) {
        return "\n \x3Cdiv class=\"modal fade\" id=\"imageViewer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\x3E\n \x3Cdiv class=\"modal-dialog\"\x3E\n \x3Cdiv class=\"modal-content\"\x3E\n \x3Cdiv class=\"modal-header\"\x3E\n \x3Cbutton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"\x3E\&times;\x3C\x2Fbutton\x3E\n \x3Ch4 id=\"imageViewerTitle\"\x3EImage\x3C\x2Fh4\x3E\n \x3C\x2Fdiv\x3E\n \x3Cdiv class=\"modal-body\"\x3E\n \x3Cimg style='width:100%;height:100%;'src =" + imagesrc + "\x3E\x3C\x2Fimg\x3E\n \x3C\x2Fdiv\x3E\n \x3Cdiv class=\"modal-footer\"\x3E\n \x3Cbutton type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"\x3EClose\x3C\x2Fbutton\x3E\n \x3C\x2Fdiv\x3E\n \x3C\x2Fdiv\x3E\n \x3C\x2Fdiv\x3E\n \x3C\x2Fdiv\x3E";
    }


    $.fn.enableEnlarge = function () {
        this.unbind('click').click(function () {
            $('#imageViewer').remove();
            var imagesrc = '"' + $(this).get()[0].src + '"';
            $('body').append(getHTML(imagesrc));
            $('#imageViewer').on('show', function () {
                $(this).css({
                    'overflow-y':'auto',
                    'max-height': '80%'
                });
                $(this).find('.modalbody').css({
                    width: '100%',
                    height: '100%'
                });
            });
            $('#imageViewer').modal();
        });
        return this;
    };

}(jQuery));

$('img').enableEnlarge();
