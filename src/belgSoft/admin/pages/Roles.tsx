import {useRoleStore} from "../../../hooks";
import {AdminLayout} from "../layouts";
import {CrudTable} from "../../components/CrudTable.tsx";
import {CreateUserModal} from "../components";
import {RoleRow} from "../components/RoleRow.tsx";

export const Roles = () => {
    const headers = [
        'ID',
        'Name',
        'State',
        'Actions'
    ]

    const { roles } = useRoleStore();

    return (
        <AdminLayout>
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    Roles
                </h1>

                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">
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


                <CreateUserModal />
            </div>
        </AdminLayout>
    )
}
