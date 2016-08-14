!function(window,document,undefined) {
    var btn = document.getElementById('btn'),
        div = document.getElementById('div'),
        timer,
        number = 0;     
    btn.onclick = function(){
        timer = setInterval(function(){
            number++;
            div.style.width = number*10 + '%';
            if(number==10){
            clearInterval(timer);
            div.style.width=0+'px';
            }
            return div.style.width == btn.style.width ? btn.style.width == div.style.width :    div.style.width = number*10 + '%';
        },500);

    };

}(window,document);

!function(window,document,undefined) {
        for(var i = 1; i <= 6;i++) {
            for(var j = 1; j <= 6;j--){
                document.write('<span></span>')
                }
            for(var k = 1; k <= 2 * i - 1; k++){
                document.write('<span>*</span>')
             }
            document.write('<br>')
        }
}(window,document);