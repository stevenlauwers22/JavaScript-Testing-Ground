"use strict";
var userDto_1 = require("./userDto");
var UserService = (function () {
    function UserService() {
        this.getUsers = function () {
            var users = new Array();
            users.push(new userDto_1.UserDto(1, "Jefke"));
            users.push(new userDto_1.UserDto(2, "Joske"));
            return users;
        };
    }
    return UserService;
}());
exports.UserService = UserService;
