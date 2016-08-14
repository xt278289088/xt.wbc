// var cfb = document.getElementById('cfb');
// var tableHtml = [
// '<table border= "1">'];
// for(var i = 1; i < 10; i++){
   /* console.log(i)*/
/*   tableHtml.push('<tr>');

   for(var j = 1; j <= i; j++){

   tableHtml.push('<td>'+i+'  *'+j+' =' +i*j+ '</td>');

   }

    tableHtml.push('</tr>');
}
tableHtml.push('</table>');

console.log(tableHtml);
cfb.innerHTML = tableHtml.join('');*/
// *************************************************************
// 
// 
// 练习99
/*var wp = document.getElementById('wp');
var table = [
    '<table border="1">', 
];

for(var i = 1; i < 10;i++){ 
    table.push('<tr>')
    for(var j = 1; j <= i; j++){
        table.push('<td>'+i+'*'+j+'='+i*j+ '</td>')
    }
    table.push('<tr>')
console.log(i)
}

table.push('</table>')
wp.innerHTML = table.join('')
console.log(table);*/

function equal(id){
    return document.getElementById(id)
}
var wp = equal('wp');
var table = ['<table  border= "1">']

   for(var i = 1;i < 10;i++){
        table.push('<tr>')
        for(var j = 1;j <= i;j++){
        table.push('<td>'+i+'*'+j+'='+i*j+'</td>')
        }
        table.push('</tr>')
   }
   table.push('</table>')
   wp.innerHTML = table.join(' ')

console.log(table)






/*try{
    Alert(22);
}catch(e){
    throw'哥们这儿出错了';
}
*/













