import {useAppDispatch, useAppSelector} from "../store";
import {
    createRole, deleteRole,
    onSetActiveRole,
    selectRole,
    setRoles,
    updateRole
} from "../store/belgsoft/admin/authorization/RoleSlice.ts";
import {belgsoftApi} from "../api";
import {Role} from "../belgSoft/admin/interfaces/Role.ts";
import {fromFormValuesToRoleDTO} from "../belgSoft/Dtos/updateUser.dto.ts";

export const useRoleStore = () => {

    const dispatch = useAppDispatch();
    const {roles, activeRole } = useAppSelector(selectRole);

    const setActiveRole = (role: Role | null) => {
        dispatch(onSetActiveRole(role));
    }

    const startLoadingRoles = async () => {
        const response = await belgsoftApi.get('/role');

        const roles = response.data;

        const mappedRoles: Role[] = roles.map(({roleId, name, value}: any) => ({
                id: roleId,
                roleName: name,
                value,
            }
        ));

        dispatch(setRoles(mappedRoles));
    }

    const startCreatingRole = async (role: Role) => {
        const dataToSend = fromFormValuesToRoleDTO(role);

        const response = await belgsoftApi.post(`/role`, {
            ...dataToSend,
        });

        dispatch(createRole(
            {
                id: response.data.roleId,
                roleName: response.data.name,
                value: response.data.value,
            }
        ));
    }

    const startUpdatingRole = async (role: Partial<Role>) => {

        const dataToSend = fromFormValuesToRoleDTO(role);

        await belgsoftApi.put(`/role/${role.id}`, {
            ...dataToSend,
        });

        dispatch(updateRole(role));
    }

    const startDeletingRole = async (roleId: string) => {
        await belgsoftApi.delete(`/role/${roleId}`);
        dispatch(deleteRole(roleId));
    }

    return {
        // Properties
        roles,
        activeRole,

        // Methods
        startLoadingRoles,
        startCreatingRole,
        startUpdatingRole,
        startDeletingRole,
        setActiveRole,
    }
}