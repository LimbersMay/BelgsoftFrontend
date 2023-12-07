import {HomeLayout} from "../layouts/HomeLayout.tsx";
import {useTablesStore} from "../../../hooks/useTablesStore.ts";
import {useUiStore} from "../../../hooks";
import {TableModal} from "../components/TableModal.tsx";
import {CrudTable, TableRow} from "../../components";

export const Tables = () => {

    const headers = [
        'ID',
        'Number',
        'Customers',
        'Actions'
    ]

    const { tables } = useTablesStore();
    const { showTableModal } = useUiStore();

    return (
        <HomeLayout>
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    Tables
                </h1>

                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={showTableModal}>
                    Create Table
                </button>

                {/* Table */}
                <CrudTable headers={headers}>
                    {
                        tables.map((role) => (
                            <TableRow key={role.id} {...role} />
                        ))
                    }
                </CrudTable>

                <TableModal />
            </div>
        </HomeLayout>
    )
}