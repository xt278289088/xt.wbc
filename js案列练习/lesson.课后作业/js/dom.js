 function rand(id){
    return document.getElementById(id);
 }
 //*********************************电子时钟*********************************
setInterval(function(){
    var date = new Date();
    /*var year = date.getFullYear();
    var    month = date.getMonth()+1;
    var    date = date.getDate();*/
    var    hours = date.getHours();
    var    minutes = date.getMinutes();
    var   seconds = date.getSeconds();
     if(minutes <10){
                minutes ='0'+minutes;
            }
            if(seconds <10){
                seconds ='0'+seconds;
            }
  
    var time =/*year+'年'+month+'月'+date+ '日'+' '+*/ hours +':'+minutes +':'+seconds;
    var times = document.getElementById('times');
       times.innerHTML = time;
       
},1000)

 // ***************************************************************************
setInterval(function(){
    var date = new Date();
    var minutes = date.getMinutes(),
        seconds = date.getSeconds();  
        if(minutes < 10){
                minutes ='0'+minutes;
            }
        if(seconds < 10){
                seconds ='0'+seconds;
            }
     var timemeter = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'+'  '+date.getHours()+':'+minutes+':'+seconds;         
    var dz = document.getElementById('dz');
    dz.innerHTML = timemeter;
},1000)
// ***************************************************************************
// ********************************数字的掌握*********************************
var x = 1.223345;
    x = Math.ceil(x);
console.log(x)
// **********************************数组的遍历*******************************
var arr = '1 2 3 4 5 6 7 8 9 0 3 2 4 5 6 7 23 54 4 5 6 4 1'.split(' ');
function arr2(arr4){
    var arr1 = [];
    for(var i = 0;i < arr4.length;i++){
        if(arr1.indexOf(arr4[i]) < 0){
            arr1.push(arr4[i]);
    }  
}
return arr1;
}
var arr3 = arr2(arr);

console.log(arr3);
// *************************************************************************.
/*function(x,y){
    index = -1;
    for(var i = 0;i < y.length;i++){
        if(y[i]== x ){
           index = 1;
           break;
        }
    }
    return index;
}*/
// *********************************数组的排序方法****************************
var arr = [1 ,32, 4, 5 ,6 ,67, 77,8, 9, 9 ,67, 5, 7, 57];
console.log(arr)
function rank(arr1){
    return arr1.sort(sortBy);
    // return a-b;/*b-a;*/  
}
function sortBy(a, b){
        if(a < b){
            return 1;   
        }
        else if(a > b){
            return -1;   
        }
        else{
            return 0;   
        }
    }
var arr3 = rank(arr);
console.log(arr3)
//********************************99乘法表************************************

var table = rand('table');
var tables = ['<table border = "1">'];
for(var i = 1; i < 10; i++){
        tables.push('<tr>');
            for(var j = 1; j <= i; j++){
                tables.push('<td>'+i+'*'+j+'=='+j*i+'</td>');
            }
        tables.push('<tr>');
}



tables.push('</table>');
table.innerHTML = tables;

for(var i = 0;i<=10;i++){
   if(i==5){
     continue;
   }
   console.log(i)
}
//********************************周末去哪玩*********************************

var fk = rand('fk');
var star = rand('sr');
var stop = rand('sp');
var arr = '故宫 长城 十渡 十三陵 圆明园 颐和园'.split(' ');
var timer;
var text1 = document.getElementById('text1');
console.log(text1)
var xz = rand('xz');
console.log(fk);console.log(sr);console.log(sp);
/*var input = text1.getElementsByTagName('input');
console.log(input)*/
xz.onclick = function(){

    var val = text1.value;
        val = val.split(' ');
for(var i = 0; i<arr.length; i++){
     if(val==''){
        alert('没有输入地名，请再次输入地名')
        return;
     }else if(val==arr[i]){
        alert(arr[i]+'已存在，不在添加')
        /*alert('请再次输入地名');*/
        return  val==null;;
     }
}
    arr = arr.concat(val);
    text1.value = null;
     

}

star.onclick = function(){
    /*sr.disabled = 'disabled';*/
    if(timer){
        return;
    }
    timer = setInterval(function(){
                    var arr1 = arr[parseInt(Math.random()*arr.length)] ; 
        fk.innerHTML = arr1;
},100)
} 
stop.onclick = function(){
    clearInterval(timer);
    timer = undefined;
}

// *******************************动态下拉菜单******************************

var render = rand('render');
var btn = rand('btn');
btn.onclick = function(){
    var dress = '北京 上海 深圳 杭州 天津 甘肃 天水'.split(' ');
    select(dress);
}
function select(option){
        var opt = [];  
        for(var i = 1; i < 7;i++){
            opt.push('<option>'+option[i]+'</option>');
            console.log(opt)
        }


        render.innerHTML = opt.join(' ');
}
// *******************************div形式的99******************************
function cfa(){
    document.write('<div class="tr">');
    for(var i=1; i<10; i++){
        for(var j=1; j<=i; j++){
        document.write('<div class="dd">'+'<span class="td">'+i+'*'+j+'='+j*i+'</span>'+'</div>');
        }
        document.write('<br>')
    }
        document.write('</div>');
};
cfa();




