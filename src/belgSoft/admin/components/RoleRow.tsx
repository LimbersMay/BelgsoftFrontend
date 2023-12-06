import {Role} from "../interfaces/Role.ts";

export const RoleRow = ({ id, name, value }: Role) => {
    return (
        <tr>
            <td className="px-4 py-2 border">{id}</td>
            <td className="px-4 py-2 border">{name}</td>
            <td className="px-4 py-2 border">{value}</td>
            <td className="px-4 py-2 border text-left">
                <button
                    className="px-4 py-2 mr-2 w-20 text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={() => console.log('edit')}
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
