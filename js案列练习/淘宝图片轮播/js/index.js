// !function(window,document,$,undefined){
//     function getimgsliderclassname($target){
//         /*if($target.length==0){
//             return;
//         }*/
//         var $ollis = $target.find('.indicator li'),
//             $uls = $target.find('.indicator2'),
//             $arrows = $target.find('.arrows')
//             $ullis = $target.find('.indicator2 li');
//         $ollis.on('click',function(e,type){
//                 console.log(type)
//             var $this = $(this),
//                 index = $this.index(),
//                 $ul = $target.find('.indicator2'),
//                 $lis1 = $target.find('ul li'),
//                 width = $ullis.width(),
//                 $lis = $ul.find('li');
//              /*   if($lis1!=$ullis){
//                     alert(99)
//                 };*/
//                 if(type){
//                     $uls.animate({'margin-left':'-520px'},500,function(){
//                      $uls
//                         .append($lis.eq(0))
//                         .css({'margin-left':0});
//                    })
//                 }else{
//                     $uls.animate({'margin-left':-index*width+'px'},500/*,function() {
//                         $uls
//                             .prepend($lis.eq($lis.length-1));
//                     }*/);
//                 }
//                 $this.addClass('on').siblings('.on').removeClass('on');
//                 // $ullis.eq(index).show().siblings(':visible').hide();
//                 // $uls.animate({'margin-left':'-520px'},500,function(){
//                 //     $uls
//                 //         .append($lis.eq(0))
//                 //         .css({'margin-left':0});
//                         console.log($ullis.eq(0))
//                         console.log($lis.eq(0))
//                 /*})*/  
//         })
//         $target
//             .on('mouseover',function() {
//                 $arrows.show();
//             })
//             .on('mouseout',function() {
//                 $arrows.hide();
//             })
//         $arrows.on('click',function() {
//             var $this = $(this),
//                 curindex = getindex();
//             if($this.hasClass('left')){
//                 curindex--;
//                     if(curindex < 0) {
//                         curindex = $ollis.length-1;
//                     }
//                 console.log(curindex)
//             }else{
//                 curindex++;
//                     if(curindex > $ollis.length-1){
//                         curindex = 0;
//                     }
//                 // $this.
//                 // console.log(curindex)
//                 console.log(curindex)
//             };
//             $ollis.eq(curindex).trigger('click',['trigger']);
//         });
//         function getindex(){
//             return $ollis.filter('.on').index();
//         }    
//     }
//     getimgsliderclassname($('.img-slider'));

// }(window,document,jQuery);
// /*!function(window,document,undefined) {
//     var timer,
//         inner = document.getElementById('inner'),
//         content= -1,
//         arr=[];
//     timer = setInterval(function () {
//            content++;
//           arr.push(content);  
//         inner.innerHTML = arr.join('');
//          if(content >= 10) {
//             clearInterval(timer)
//             return;
//         }
//     },1000)


// }(window,document,undefined)*/

// *******************************************************************

!function(window,document,$,undefined) {
    var $ollis = $('.indicator').find('li'),
        $ul = $('.indicator2'),
        $leftarrow = $('#leftarrow'),
        $rightarrow = $('#rightarrow'),
        $ullis = $ul.find('li'),
        $target = $('.img-slider'),
        $arrows = $('.arrows'),
        direction = 'left';
    $ollis.on('click', function(e,type,direction) {
        var $this = $(this),
            $ul = $('.indicator2'),
            $ullis = $ul.find('li'),
            width = $ullis.width(),
            index = $this.index();
            console.log($arrows)
        $this.addClass('on').siblings('.on').removeClass('on');

        if(type){
            if( direction == 'right'){
                $ul.animate({'margin-left':-width+'px'},1000,function(){
                    $ul
                        .append($ullis.eq(0))
                        .css({'margin-left':0})
                    });
            }else{
                $ul
                    .prepend($ullis.eq($ullis.length-1))
                    .css({'margin-left':'-520px'});
                $ul.animate({'margin-left':0+'px'},1000);
            }
            // console.log($arrows.hasClass('left'))
        }else{
            $ul.animate({'margin-left':-index*width+'px'},1000)
        }   
        //     // $ullis.eq(index).show().siblings(':visible').hide()
        // $ul.animate({'margin-left':-index*width+'px'},1000,function(){
        //         $ul
        //             .append($ullis.eq($ullis.length-1))
        //             .css({'margin-left':0});
        //             /*console.log($ullis.eq(0))
        //     })

        });


        $target
            .on('mouseover',function (){
                $arrows.show();
            })
            .on('mouseout',function (){
                $arrows.hide();
            });

        $arrows.on('click',function() {
            if($('ul:animated').length > 0) {
                return;
            }
            var $this = $(this),
                direction = 'right',
                curindex = $ollis.filter('.on').index();
            if($this.hasClass('left')){
                curindex--;
                if( curindex < 0) {
                    curindex = $ollis.length-1;;
                }
                 direction = 'left';
            }else{
                curindex++;
                 console.log(curindex)
                if(curindex >  $ollis.length-1){
                    curindex = 0;

                }
            }
            $ollis.eq(curindex).trigger('click',['trigger', direction]);
            
        })





}(window,document,jQuery);

/*
!function(window, document, $, undefined){
    function render($target){
        if($target.length ==0){
            return;
        }
        var $indicator = $target.find('.indicator li'),
            $arrows = $target.find('.prev, .next');
        $indicator.on('click', function(e, type, direction){
            var $this = $(this),
                index = $this.index(),
                $ul = $target.find('ul'),
                $lis = $ul.find('li'),
                width = $lis.width();
            $this.addClass('on').siblings('.on').removeClass('on');
             if(type){
                if(direction =='next'){
                    $ul.animate({'margin-left':'-520px'},500, function(){
                        $ul
                            .append($lis.eq(0))
                            .css({'margin-left':0});
                    })
                } else{
                    $ul.prepend($lis.eq($lis.length-1))
                        .css({'margin-left':'-520px'});
                    $ul.animate({'margin-left':0},500);
                }

            } else{
                $ul.animate({'margin-left': - index*width+'px'},500);
            }

        });
        $target
            .on('mouseover', function(){
                $arrows.show();
            })
            .on('mouseout', function(){
                $arrows.hide();
            });
            $arrows.on('click', function(){
                $this = $(this);
                currIndex = getCurrIndex(),
                direction='next';
                if($this.hasClass('prev')){
                    //TODO
                    currIndex--;
                    if(currIndex < 0){
                        currIndex = $indicator.length -1;
                    }
                    direction = 'prev';
                } else{
                    currIndex++;
                    if(currIndex > $indicator.length - 1){
                        currIndex = 0;
                    }
                }
                $indicator.eq(currIndex).trigger('click', ['teigger', direction]);
            });
            function getCurrIndex(){
                return $indicator.filter('.on').index();

            }

    }
    render($('.img-slider'));
}(window, document, jQuery);
*/