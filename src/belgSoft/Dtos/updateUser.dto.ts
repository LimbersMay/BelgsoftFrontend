import {CreateUserModalProps} from "../admin";

export interface UserDTO extends Omit<CreateUserModalProps, "username"> {
    name: CreateUserModalProps["username"];
}

export const fromFormValuesToUserDTO = (values: Partial<CreateUserModalProps>): Partial<UserDTO> => {
    const {username, ...rest} = values;

    return {
        ...rest,
        name: username
    };

}
