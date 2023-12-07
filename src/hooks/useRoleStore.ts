import {useAppDispatch, useAppSelector} from "../store";
import {selectRole, setRoles} from "../store/belgsoft/admin/authorization/RoleSlice.ts";
import {belgsoftApi} from "../api";
import {Role} from "../belgSoft/admin/interfaces/Role.ts";

export const useRoleStore = () => {

    const dispatch = useAppDispatch();
    const {roles} = useAppSelector(selectRole);

    const startLoadingRoles = async () => {
        const response = await belgsoftApi.get('/role');

        const roles = response.data;

        const mappedRoles: Role[] = roles.map(({roleId, name, value}: any) => ({
                id: roleId,
                name,
                value,
            }
        ));

        dispatch(setRoles(mappedRoles));
    }

    return {
        // Properties
        roles,

        // Methods
        startLoadingRoles
    }
}