import { UserService } from './userService';
import { UserDto } from './userDto';

export class UserOverviewComponent {
    users: Array<UserDto>;

    constructor(private readonly userService: UserService) {
    }

    show = function() {
        this.users = this.userService.getUsers();
    };
}