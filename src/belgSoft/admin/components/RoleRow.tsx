import {Role} from "../interfaces/Role.ts";
import {useRoleStore, useUiStore} from "../../../hooks";

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
                    className="px-4 py-2 mr-2 w-20 text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600">
                    Delete
                </button>
            </td>
        </tr>
    )
}
