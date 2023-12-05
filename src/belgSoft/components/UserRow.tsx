import {User} from "../admin/interfaces/User.ts";

export const UserRow = ({ID, name, email, role, plan, status}: User) => {

    return (
        <tr>
            <td className="px-4 py-2 border">{ID}</td>
            <td className="px-4 py-2 border">{name}</td>
            <td className="px-4 py-2 border">
                <a href="mailto:lim@google.com">
                    {email}
                </a>
            </td>
            <td className="px-4 py-2 border">{role}</td>
            <td className="px-4 py-2 border">{plan}</td>
            <td className="px-4 py-2 border">
                <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">
                    {status}
                </span>
            </td>
            <td className="px-4 py-2 border text-left">
                <button className="px-4 py-2 mr-2 w-20 text-white bg-green-500 rounded hover:bg-green-600">
                    Edit
                </button>
                <button className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600">
                    Delete
                </button>
            </td>
        </tr>
    )
}