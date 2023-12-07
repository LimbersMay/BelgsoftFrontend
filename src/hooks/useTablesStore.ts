import {useAppDispatch} from "../store";
import {useSelector} from "react-redux";
import {
    deleteTable,
    onSetActiveTable,
    selectTable,
    setTable,
    setTables,
    updateTable
} from "../store/belgsoft/admin/tablesSlice.ts";
import {belgsoftApi} from "../api";
import {Table} from "../belgSoft/interfaces/table.interface.ts";

export const useTablesStore = () => {

    const dispatch = useAppDispatch();
    const {tables, activeTable} = useSelector(selectTable)

    const setActiveTable = (table: Table | null) => {
        dispatch(onSetActiveTable(table));
    }

    const startLoadingTables = async () => {
        const response = await belgsoftApi.get('/tables');

        const tables = response.data;

        const mappedTables = tables.map(({tableId, number, customers}: any) => {
            return {
                id: tableId,
                number,
                customers,
            }
        });

        dispatch(setTables(mappedTables));
    }

    const startCreatingTable = async (table: Table) => {

        const response = await belgsoftApi.post('/tables', table);
        table.id = response.data;

        dispatch(setTable(table));
    }

    const startUpdatingTable = async (table: Partial<Table>) => {
        await belgsoftApi.put(`/tables/${table.id}`, {
            ...table,
        });

        dispatch(updateTable(table));
    }

    const startDeletingTable = async (tableId: string) => {
        await belgsoftApi.delete(`/tables/${tableId}`);

        dispatch(deleteTable(tableId));
    }

    return {
        // Properties
        tables,
        activeTable,

        // Methods
        startLoadingTables,
        startUpdatingTable,
        startDeletingTable,
        startCreatingTable,
        setActiveTable,
    }
}
