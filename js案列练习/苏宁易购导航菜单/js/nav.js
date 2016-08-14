!function(window,document,$,undefined) {
    $('.result').find('.tu i').on('mouseover', function() {
        var $this = $(this),
            width = $this.siblings('.massage').width(),
            params = {
            'margin-left':-width+'px',
            };
            console.log(width)
        $this.siblings('.massage').animate(params,300);
        console.log(params)
    }).on('mouseout',function() {
        var $this = $(this);
        $this.siblings('.massage').animate({'margin-left': 0,}, 300);
    })
}(window,document,jQuery);