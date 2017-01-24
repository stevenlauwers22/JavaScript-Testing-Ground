import { UserDto } from './userDto';

export class UserService {
    getUsers = (): UserDto[] => {
        const users = new Array<UserDto>();
        users.push(new UserDto(1, "Jefke"));
        users.push(new UserDto(2, "Joske"));

        return users;
    };
}