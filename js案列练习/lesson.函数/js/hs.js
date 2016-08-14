  /*function $(id){
    return document.getElementById(id)
};
var render = $('render');
var btn = $('btn');
btn.onclick = function(){
    var arr = '北京 天津 上海 深圳 杭州'.split(' ');
    console.log(arr)
    renders(arr);   
}
function renders(pty){
    var opt = [];/*(全局变量的意思)*/
/*    for(var i = 0; i < pty.length; i++){
       opt.push('<option>'+pty[i]+ '</option>');

    }
    render.innerHTML = opt.join(' ');
  
}
  var arr = '北京 天津 上海 深圳 杭州'.split(' ');
    console.log(arr)*/
    // ****************************************************************
   /* function text(){
        alert('nihao')
    }
    text();*/

// ******************************************************************

/*function $(id){
   return document.getElementById(id);
}
var render = $('render');
var btn = $('btn');
btn.onclick = function(){
    var location = '北京 上海 深圳 天津 杭州'.split(' ');
    
    rander(location);
}
function rander(arr1){
     var opt = [];
     for(var i = 0;i<arr1.length;i++){
        opt.push('<option>'+arr1[i]+'</option>') ;
          
     }
      render.innerHTML = opt.join(' ');
}*/

// *************************************对象**********************************

/*var obj = {
  name: '陈彤彤',
  garder: '男',
  'f ouction': '篮球'
  getname:function(){
    
  }
};
console.log(obj['f ouction'*//*]);*/
function date(){
    setInterval(function(){
       var date = new Date(),
        timer,
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
        if(minutes < 10){
          minutes = '0' + minutes;
        }
        if(seconds < 10){
          seconds = '0' + seconds;
        }

        timer = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+' '+date.getHours()+':'+minutes+':'+seconds;
        console.log(timer)
            var times = document.getElementById('times');
          console.log(times)
        times.innerHTML =  timer;
    },10);

};
/*date();*/
// ****************************************************************************/
// function tady(date,getdate){
//     var date, y , M , d , h , m , s ;
//         y = date.getFullYear() ;
//         M = date.getMonth()+1 ;
//         d = date.getDate() ;
//         h = date.getHours() ;
//         m = date.getMinutes() ;
//         s = date.getSeconds() ;
//         g = date.getDay();
//        /*for(var g=0; g<7; g++){*/
//                if(g==6){
//                 g = '星期六';
//                }else if(g==0){
//                 g = '星期日';
//                }else if(g==1){
//                 g = '星期一';
//                }else if(g==2){
//                 g = '星期二';
//                }else if(g==3){
//                 g = '星期三';
//                }else if(g==4){
//                 g = '星期四';
//                }else{
//                 g = '星期五';
//                }
//      /*  }*/
//         if(getdate){
//             return  y + '年' + time(M-1) +'月' + time(d-(d-1)) + '日' + ' ' +  g ;
//         }else{
//           return  y + '年' + time(M) +'月' + time(d) + '日' + ' ' + h + ':' + time(m) + ':' + time(s)+ ' ' + g ;
//         }
//   return  y + '年' + time(M) +'月' + time(d) + '日' + ' ' + h + ':' + time(m) + ':' + time(s)+ ' ' +  g ;

//     function time(has){
//       return has < 10 ? '0' + has : has ;
//       /*if(has<10){
//        return has = '0' + has;
//       }else{
//        return has;
//       }*/
//     }
// };
// var d = tady(new Date());
// console.log(d)
// var upd =  tady(new Date(), true)
// console.log(upd)
// 上个月第一天
/*function end(date){
    var date;
    date.setMonth(date.getMonth()-1);
    date.setDate(1);
    console.log(date) 
};*/
// 下个月今天的日期
/*var end = end(new Date());*/
/*function endm(d){
    var d;
    d.setMonth(d.getMonth()+1); 
    d.setDate(d.getDate());
    var g=  d.getDay();
      if(g==6){
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
               }
    console.log(g)
 };
endm(new Date);*/
// 返回2008.8.8号是周几
/*function date(){
    var d = new Date();
    d.setFullYear(d.getFullYear()-8)
    d.setMonth(d.getMonth()+1)
    d.getDate()
    var g = d.getDay();
    if(g==6){
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
               }
    console.log(g)
};
date();*/
// 第一题  返回2008年08月08日

/*var btn = document.getElementById('btn');
var div = document.getElementById('div');

btn.onclick = function(){
    var d = new Date;
    var year = d.setFullYear(2008),
        month = d.setMonth(7),
        date = d.setDate(8);
    console.log(month);
    div.innerHTML=d.getDay();

}


// 第二题  返回现在的 年月日 时分秒

var btn = document.getElementById('btn');
var div = document.getElementById('div');

btn.onclick = function(){

        var d = new Date;
        var year = d.getFullYear(),
            month = d.getMonth()+1;
            date = d.getDate(),
            h= d.getHours(),
            m= d.getMinutes(),
            s= d.getSeconds();
        var now = zero(year)+'年'+zero(month)+'月'+zero(date)+'日 &nbsp'+ zero(h)+"时"+zero(m)+"分"+zero(s)+"秒";
        
        console.log(now)
        div.innerHTML=now;
        
    function zero(num){
        return num<10 ? "0"+num : num ;
    }

}



// 第三题   

var btn = document.getElementById('btn');
var div = document.getElementById('div');

btn.onclick = function(){
    var d = new Date;
    var year = d.getFullYear(),
        month = d.getMonth(),
        date = d.setDate(1);

    var last_month = zero(year)+'年'+zero(month)+'月'+zero(d.getDate())+'日';

    div.innerHTML=last_month;
    function zero(num){
        return num<10 ? "0"+num : num ;
    }
}


// 第四题  返回上个月最后一天 

var btn = document.getElementById('btn');
var div = document.getElementById('div');

btn.onclick = function(){
    var d = new Date;
    var year = d.getFullYear(),
        month = d.getMonth();

    var last_date = new Date(year,month,0).getDate();


    div.innerHTML=zero(year)+'年'+zero(month)+'月'+zero(last_date)+'日';

    function zero(num){
        return num<10 ? "0"+num : num ;
    }
}


// 第五题 返回下个月的今天是星期几


var btn = document.getElementById('btn');
var div = document.getElementById('div');

btn.onclick = function(){
    var d = new Date;
    var year = d.getFullYear(),
        month = d.setMonth(d.getMonth()+1),
        date = d.getDate(),
        day = d.getDay(),
        week;
        // week(day);
    if (day == 0) {
        week = '天';
    }else {
        week = day;
    }
        // function week(abc){
        //  return abc=0 ? "天" : abc;
        // }
    console.log(month);
    div.innerHTML='星期'+week;
}*/
// *******************************dedao**********************************
/*function cc(){
     var d = new Date;
    var year =d.getFullYear( d.setFullYear(2008)),
        month = d.getMonth(d.setMonth(7))
        date =d.getDate(d.setDate(8)) ;

    var time = year+'年'+month+'月'+date+'日';
  console.log(time)
};
cc();*/
var arr = [1 ,2 ,3 ,4 ,5 , 6];
console.log(arr.join(' '))
var str = '1 2 3 4 5 6'.split(' ');
console.log(str);
for(var i = 0; i<6;i++){
console.log(i)
}
console.log(i)