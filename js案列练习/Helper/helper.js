!function(window,document,undefined){
    var Helper = {};
    Helper.dom = function(id) {
        if(typeof id =="string") {
            return document.getElementById(id);
        }
        return 'id not string';
        
    }

    window.Helper = Helper;
}(window,document)

