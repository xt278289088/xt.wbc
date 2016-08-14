/*$('div').attr('title','red');*/
/*var $div = $('div');
var $body = $('body');*/

/*console.log($div.length)*/
/*for(var i = 0;i < $div.size();i++){
    $div[i].title = 'adc';
}*/
// var btn = document.getElementById('btn'), test = document.getElementById('test');
// test.style.display = 'none';
// btn.onclick = function(){
//   if(btn.innerHTML =='显示'){
//     btn.innerHTML ='隐藏';
//     test.style.display = 'block';
//   }else{
//     btn.innerHTML ='显示';
//     test.style.display = 'none';
//   }
    
// }
// $('.btn-a').on('click', function(){
//     $('.wb').toggle();
// })
/*
$('#btn') on('click',function(){
    $('#test').toggleClass('show');
})*/
/*$('.btn-a').on ('click', function() {
    var $wp  = $('.wb')
    $wp.toggleClass('show')
        if ($wp.hasClass('show')){
            this.innerHTML = '隐藏';   
        }else {
            this.innerHTML='显示';
    }
    var x=this. innerText;
 console.log(x)   
})*/

$('#btn').on('click', function() {
    var $sel = $('#sel').val();/*.value*/
    console.log($sel)
    $('#txt')[0].value = $sel;
    console.log($('#txt')[0].value)
})
// ****************************************************************************
$val = $('.val li');
/*console.log($val[0])*/
$val.on('click', function() {
    $this = $(this);
    $this.addClass('on').siblings().removeClass('on');
})