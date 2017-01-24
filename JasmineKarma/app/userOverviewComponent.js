"use strict";
var UserOverviewComponent = (function () {
    function UserOverviewComponent(userService) {
        this.userService = userService;
        this.show = function () {
            this.users = this.userService.getUsers();
        };
    }
    return UserOverviewComponent;
}());
exports.UserOverviewComponent = UserOverviewComponent;
