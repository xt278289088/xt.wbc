!function(window,document,undefined){
    var Helper = {};
    Helper.getDateArr = function(date) {
        var y = date.getFullYear(),
            M = date.getMonth()+1,
            d = date.getDate(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
        return [y, fill0(M), fill0(d), h, fill0(m), fill0(s),]
        /* arr = [y + '年' + fill0(M) + '月' + fill0(d) + '日' + fill0(h) + ':' + fill0(m) + ':' + fill0(s)] ; */
    }    
    function fill0(num){
        return  num < 10 ? '0' + num : num;
    }
console.log('abd')
    window.Helper = Helper;
}(window,document);