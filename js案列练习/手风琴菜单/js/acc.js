!function(window,document,undefined) {
    var $accordions = $('.accordions'),
        $title = $('.title'),
        $h1 = $accordions.find('h1');
        console.log($h1)
    $title.on('click', function() {
        var $this = $(this)
            $this
                .find('h1').toggleClass('color')
                .end()
                .find('ul').slideToggle()
                .end()
                .siblings()
                .find('h1.color').removeClass('color')
                .end()
             /*   .siblings()*/
                .find('ul:visible').slideUp();
            $this.siblings().find('ul:visible').slideUp();
                console.log($this.find('ul:visible'))


    })    



}(window,document);











