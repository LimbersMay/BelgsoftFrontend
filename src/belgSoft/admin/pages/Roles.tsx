import {useRoleStore, useUiStore} from "../../../hooks";
import {AdminLayout} from "../layouts";
import {CrudTable} from "../../components/CrudTable.tsx";
import {RoleRow} from "../components/RoleRow.tsx";
import {CreateRoleModal} from "../components/CreateRoleModal.tsx";

export const Roles = () => {

    const headers = [
        'ID',
        'Name',
        'Value',
        'Actions'
    ]

    const { roles } = useRoleStore();
    const { showRoleModal } = useUiStore();

    return (
        <AdminLayout>
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    Roles
                </h1>

                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={showRoleModal}>
                    Create Role
                </button>

                {/* Table */}
                <CrudTable headers={headers}>
                    {
                        roles.map((role) => (
                            <RoleRow key={role.id} {...role} />
                        ))
                    }
                </CrudTable>

                <CreateRoleModal />
            </div>
        </AdminLayout>
    )
}
