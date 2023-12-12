import {Table} from "../interfaces/table.interface.ts";
import {useUiStore} from "../../hooks";
import {useTablesStore} from "../../hooks/useTablesStore.ts";

export const TableRow = (table: Table) => {

    const { showTableModal } = useUiStore();
    const { setActiveTable, startDeletingTable } = useTablesStore();

    const handleEdit = () => {
        showTableModal();

        setActiveTable(table);
    }

    const { id, number, customers } = table;

    return (
        <tr>
            <td className="px-4 py-2 border">{id}</td>
            <td className="px-4 py-2 border">{number}</td>
            <td className="px-4 py-2 border">{customers}</td>
            <td className="px-4 py-2 border text-left">
                <button
                    className="px-4 py-2 mr-2 w-20 text-white bg-green-600 rounded hover:bg-green-600 disabled:bg-green-400"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                    onClick={() => startDeletingTable(id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}