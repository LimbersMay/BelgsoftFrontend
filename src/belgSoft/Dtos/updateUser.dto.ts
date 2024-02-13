import {CreateUserModalProps} from "../admin";
import {Role} from "../admin/interfaces/Role.ts";

export interface UserDTO extends Omit<CreateUserModalProps, "username" | "statusId" | "roleId" | "planId"> {
    name: CreateUserModalProps["username"];
    userStateId: CreateUserModalProps["statusId"];
    roleId: CreateUserModalProps["roleId"];
    userTypeId: CreateUserModalProps["planId"];
}

export interface RoleDTO extends Omit<Role, "roleName"> {
    name: Role["roleName"];
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

export const fromFormValuesToRoleDTO = (values: Partial<Role>): Partial<RoleDTO> => {
    const { roleName, ...rest } = values;

    return {
        ...rest,
        name: roleName,
    };
}