var MockAuth = function () {

    this.signin = function (obj, succCb) {
        succCb({}, {});
    };

    this.signout = function () {

    };
};