var should = require('chai').should();
var sinon = require('sinon');
var UserDto = require('./userDto').UserDto;
var UserService = require('./userService').UserService;
var UserOverviewComponent = require('./userOverviewComponent').UserOverviewComponent;

describe('UserOverviewComponent.show', function() {
  it('gets the users from the UserService', function() {
    var users = new Array();
    users.push(new UserDto(1, 'Dummy1'));
    users.push(new UserDto(2, 'Dummy2'));

    var userService = new UserService();
    sinon.stub(userService, 'getUsers').returns(users);

    var userOverviewComponent = new UserOverviewComponent(userService);
    userOverviewComponent.show();
    userOverviewComponent.users.should.equal(users);
  });
});