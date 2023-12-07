import {CreateUserModalProps} from "../admin";

export interface UserDTO extends Omit<CreateUserModalProps, "username" | "statusId" | "roleId" | "planId"> {
    name: CreateUserModalProps["username"];
    userStateId: CreateUserModalProps["statusId"];
    roleId: CreateUserModalProps["roleId"];
    userTypeId: CreateUserModalProps["planId"];
}

export const fromFormValuesToUserDTO = (values: Partial<CreateUserModalProps>): Partial<UserDTO> => {
    const { username, statusId, roleId, planId, ...rest } = values;

    return {
        ...rest,
        name: username,
        userStateId: statusId,
        roleId: roleId,
        userTypeId: planId,
    };
}

