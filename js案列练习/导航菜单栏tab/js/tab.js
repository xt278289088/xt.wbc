var z = 'sdnlsdfiefjhskdfjoi';
console.log(z.substring(0,3));
console.log(z.substr(1,3));
console.log(z.toUpperCase());
var x =1.222321241;
console.log(x.toFixed(4));
// **********************************************************************
/*function tab(ClassName){
    var $target = $(ClassName),
        $li = $target.find('ul>li'),
        $divs = $target.find('div>div');
    console.log($divs)
    console.log($divs)
    $li.on('click', function(){
        $this = $(this),
        index = $this.index();
        $this.addClass('lion').siblings('.lion').removeClass('lion');
        $divs.eq(index).show().siblings().hide();
        console.log($divs.length)

    })
};
tab('.tab');
tab('.tabs2');
*/
// *******************************************************************************
/*function tab(className){
    $target = $(className);
    // console.log($target)
    $target.each(function(i, obj){
        console.log(obj)
        var $obj = $(obj),
            $lis = $obj.find('ul>li'),
            $divs = $obj.find('div>div'),
            evt,
            isMouseover = false,
            timer;
        if($obj.hasClass('mover')){
            evt = 'mouseover';
            isMouseover = true;
        }else {
            evt = 'click';
        }
        $lis .on(evt, function(){
            var $this = $(this);
                index = $this.index();
            if(isMouseover){
                timer = setTimeout(function(){
                    $this.addClass('lion').siblings('.lion').removeClass('lion');
                    $divs.eq(index).show().siblings().hide();   
                },300);
                $lis.on('mouseout',function(){
                   if(timer) {
                    clearTimeout(timer);
                    }
                });
            } else {
                $this.addClass('lion').siblings('.lion').removeClass('lion');
                $divs.eq(index).show().siblings().hide();
                console.log($divs.length)
            }

        });
    })


};

tab('.tab');
*/
function ClassName(classname){
    var $target = $(classname);
    $target.each(function(i,obj){
        var $obj = $(obj),
            $lis = $obj.find('ul>li'),
            $divs = $obj.find('div>div'),
            evt,
            timer,
            inmouseover = false;
        if($obj.hasClass('mover')){
            evt = 'mouseover';
            inmouseover = true;
        }else{
            evt = 'click';
        }
    $lis.on(evt, function(){
        var $this = $(this),
            index = $this.index();
        if(inmouseover){
            timer = setTimeout(function(){
                $this.addClass('lion').siblings('.lion').removeClass('lion');
                $divs.eq(index).show().siblings().hide();
                    },300)
            $lis.on('mouseout',function(){
                if(timer){
                    clearTimeout(timer)
                }
                
            })
        }else{
            $this.addClass('lion').siblings('.lion').removeClass('lion');
            $divs.eq(index).show().siblings().hide();
        }
        

    })
    })  
   

};
ClassName('.tab');



