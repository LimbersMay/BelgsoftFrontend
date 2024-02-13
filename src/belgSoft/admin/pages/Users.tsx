import {AdminLayout} from "../layouts";
import {CrudTable} from "../../shared/components/CrudTable.tsx";
import {UserRow} from "../components/UserRow.tsx";
import {CreateUserModal} from "../components";
import {useUiStore, useUsersStore} from "../../../hooks";

export const Users = () => {

    const headers = [
        'ID',
        'Username',
        'Email',
        'Role',
        'Plan',
        'Status',
        'Actions'
    ]

    const { users } = useUsersStore();
    const { showUserModal } = useUiStore();

    return (
        <AdminLayout>
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    Users
                </h1>

                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={showUserModal}>
                    Create User
                </button>

                {/* Table */}
                <CrudTable headers={headers}>
                    {
                        users.map((user) => (
                            <UserRow key={user.Id} {...user} />
                        ))
                    }
                </CrudTable>

                <CreateUserModal />
            </div>
        </AdminLayout>
    )
}
