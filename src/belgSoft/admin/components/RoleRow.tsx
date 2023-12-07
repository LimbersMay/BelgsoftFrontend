import {Role} from "../interfaces/Role.ts";
import {useRoleStore, useUiStore} from "../../../hooks";
import {RBACTypes} from "../types/RBAC-types.ts";

export const RoleRow = (role: Role) => {

    const { showRoleModal } = useUiStore();
    const { setActiveRole } = useRoleStore();

    const handleEdit = () => {
        showRoleModal();

        setActiveRole(role);
    }

    const { id, roleName, value } = role;

    return (
        <tr>
            <td className="px-4 py-2 border">{id}</td>
            <td className="px-4 py-2 border">{roleName}</td>
            <td className="px-4 py-2 border">{value}</td>
            <td className="px-4 py-2 border text-left">
                <button
                    className="px-4 py-2 mr-2 w-20 text-white bg-green-600 rounded hover:bg-green-700 disabled:bg-green-400"
                    onClick={handleEdit}
                    disabled={roleName === RBACTypes.ADMIN}
                >
                    Edit
                </button>
                <button
                    className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                    disabled={roleName === RBACTypes.ADMIN}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
