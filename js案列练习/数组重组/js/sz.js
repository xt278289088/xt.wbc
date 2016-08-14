var arr = '1 22 3 44 45 3 2 55 6 7 8 77 8 9'.split(' ')
console.log(arr);
function paixu(pp){
     return pp.sort(function(b, a){
           return b-a;
     });
}
function By(a, b){
 if(a < b){
  return -1;
 }else if(a > b){
    return 1;
 }else{
    return 0 ;
 }
}
var newpx = paixu(arr);
console.log(newpx)







// **********************************************************

var arr1 = '1 2 3 4 3 2 6 8 55 33 22 44 77 8 9 0 8'.split(' ');
var stt = hanshu(arr1);
function hanshu(pay){
    return pay.sort(function(a,b){
        return b-a;
    });   
};

function patty(a,b){
   if(a < b){
     return -1;
   }else if(a > b){
    return 1;
   }else{
    return 0;
   }
};

console.log()
// ************************************************************
/*var sz = '1 2 2 4 5 6 8 4 4 66 7 8 9 8 7 5 4 3 2'.split(' ');

function pp(cc){
    var cx = [];
    for(var i = 0;i<sz.length;i++){
        if(cx.indexOf(sz[i]) < 0){
              cx.push(sz[i]);
        }     ;
            
           console.log(cx)
      }
      return cx;
}

var newarr = pp(sz);
console.log(newarr)
function inarry(x ,y){
    index = -1;
    for(var i = 0;i <y.length;i++){
             if(y[i]==x){
              index = i;
              break;
             } 
    }
   return index;
}
var j = 1;
for(var i = 1; i <= 5;i++){
    j *= i;
}
console.log(j)*/
 // *****************************************************

var arr3 = '11 22 33 22 44 22 44 5 6 3 22 33 7 8 9 0 33 22 24 4 5 54 65'.split(' ');

function hs(shuz){
  var newarr= [];
  for(var i = 0; i<arr3.length;i++){
      if(newarr.indexOf(arr3[i])<0){
        newarr.push(arr3[i])
      }
  }
  return newarr;
}
var arr5 = hs(arr3);
console.log(arr5);
// *****************************************************
function inarry(x.y){
  index = -1;
    for(var i = 0; i < y.length;i++){
         if(y.[i]==x){
            index = 1;
            break;
         }
    }
    return index;
}

// *********************************************************
var sum = function(x,y){
  var z = 0;
  for(var i = x;i <=y;i++){
      z+=i; 
  }
  return z;
}
var arr = sum(30,90);
console.log(arr)

// **********************************************
function getEvensum(from,to){
  var total = 0;
  for(var i = from; i <= to;i++){
     if(i % 2==0){
       total+=i;
     }
  }
  return total;
}
var r = getEvensum(3,50);
console.log(r);

// *****************************************************
function factorial(from){
  var total = 1;
        for(var i = 1;i <= from;i++){
           total*=i;
        }
      return total;
}
var r = factorial(5);
console.log(r)





