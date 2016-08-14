!function (window,document,$,undefined ){
     
    $('.btn').on('click',function() {
        var $this = $(this),
            $red = $('.red-bod');
            params = {
                'margin-left':'500px',
                'width':'200px',
                'height':'150px',
                'line-height':'150px',
                'border-radius':'150px',

            }
            $red.html('二宝');
            $red.css({
                'text-align':'center',
                'height':'200px',
                'line-height':'200px'
            })
        $red.animate(params,5000,function() {
            $red.css({'background-color':'blue',
                    'color':'#000',
                    'font-size':'5px',
                    'text-align':'center'  
            });
            $red.animate({'margin-left':0},5000)
             $red.html('二宝爱大宝')
        })
      /*  if($('.red-bod:hidden').length>0){
            console.log($('.red-bod:hidden'))
            $red.slideDown(5000);
        }else{
            $red.slideUp(5000);
        };*/
        $red.css({
            'backgroundColor':'red',
            'margin-left':'30px'}
            
             )    
        $red.html('nihao')  

  });
      



}(window,document,jQuery);



// ********************************************************************************
!function(window,document,$,undefined) {
    var addbtn = document.getElementById('add-btn'),
        del = document.getElementById('delete'),
        form = document.getElementById('form'),
        input1 = document.getElementById('input1');
        console.log(del)
        console.log(input1)
        for(var key in del) {
            console.log(del[key])
        }
    addbtn.onclick = function() {
        input1.style.display = 'block';
        
    };

    del.onclick = function(){
        del.parentNode.style.display = 'none';
    };



}(window,document,jQuery);

// *********************************************时钟**********************************************

!function(window,document,$,undefined){
    
        setInterval(function(){
            var date = new Date(),
                y = date.getFullYear(),
                M = date.getMonth()+1,
                d = date.getDate(),
                h = date.getHours(),
                m = date.getMinutes(),
                s = date.getSeconds(),
                g = date.getDay(),
                times = document.getElementById('times'),
                arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
                timer;  
                g =  arr[g];
                console.log(g)        
              /*  if(g==6){
                g = '星期六';
                }else if(g==0){
                g = '星期日';
                }else if(g==1){
                g = '星期一';
                }else if(g==2){
                g = '星期二';
                }else if(g==3){
                g = '星期三';
                }else if(g==4){
                g = '星期四';
                }else{
                g = '星期五';
                }*/
            timer = y + '年' + shi(M) +'月'+ shi(d) + '日 ' + g + ' ' + h + ':' + shi(m) + ':' + shi(s);
            times.innerHTML = timer;
            function shi(full){
                /*if(full<10){
                    return full = '0'+full
                }else{
                    return full
                }*/
                return full<10 ? '0'+full : full;

                }
                shi();
        },1000)




}(window,document,jQuery)

var arr = ['1','2','3','4','5'];
for(var i = 0; i < arr.length; i++) {
    arr[i];
    console.log(arr[i]);
}
console.log(i)
for(var i in arr){
    console.log(arr[i])
}









