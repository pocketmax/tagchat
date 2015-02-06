var MockDb = function(){
    this.bind = function(data, field){
        data[field] = {};
    }
};