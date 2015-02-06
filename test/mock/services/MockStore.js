var MockStore = function () {
    var core = {};

    this.get = function (field) {
        return core[field];
    };

    this.set = function (field, data) {
        core[field] = data;
    };

    this.remove = function (field) {
        delete core[field];
    };

};
