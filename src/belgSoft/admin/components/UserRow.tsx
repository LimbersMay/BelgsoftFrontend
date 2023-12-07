import {User} from "../index.ts";
import {useUiStore, useUsersStore} from "../../../hooks";

export const UserRow = (user: User) => {

    const { setActiveUser  } = useUsersStore();
    const { showUserModal } = useUiStore();

    const { Id, username, email, role, plan, status } = user;

    const handleEdit = () => {
        setActiveUser(user);
        showUserModal();
    }

    return (
        <tr>
            <td className="px-4 py-2 border">{Id}</td>
            <td className="px-4 py-2 border">{username}</td>
            <td className="px-4 py-2 border">
                { email }
            </td>
            <td className="px-4 py-2 border">{role}</td>
            <td className="px-4 py-2 border">{plan}</td>
            <td className="px-4 py-2 border">
                {
                    status === "ACTIVE" ? (
                        <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">
                            {status}
                        </span>
                    ) : (
                        <span className="px-2 py-1 text-xs text-white bg-red-500 rounded">
                            {status}
                        </span>
                    )
                }
            </td>
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