import {useAuthStore, useUiStore} from "../../../hooks";
import {useAreaStore} from "../../../hooks";
import {RBACTypes} from "../../admin/types/RBAC-types.ts";
import {Area} from "../../admin";

export const AreaRow = (area: Area) => {
    const { showAreaModal } = useUiStore();
    const { setActiveArea, startDeletingArea } = useAreaStore();
    const { role } = useAuthStore();

    const handleEdit = () => {
        showAreaModal();

        setActiveArea(area);
    }

    const { areaId, name, description } = area;

    return (
        <tr>
            <td className="px-4 py-2 border">{areaId}</td>
            <td className="px-4 py-2 border">{name}</td>
            <td className="px-4 py-2 border">{description}</td>
            <td className="px-4 py-2 border text-left">
                {
                    (role === RBACTypes.ADMIN) && (
                        <>
                            <button
                                className="px-4 py-2 mr-2 w-20 text-white bg-green-600 rounded hover:bg-green-600 disabled:bg-green-400"
                                onClick={handleEdit}
                            >
                                Edit
                            </button>
                            <button
                                className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                                onClick={() => startDeletingArea(areaId)}
                            >
                                Delete
                            </button>
                        </>
                    )
                }
            </td>
        </tr>
    )
}