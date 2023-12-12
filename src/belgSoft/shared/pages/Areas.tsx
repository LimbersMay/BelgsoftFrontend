import {useAreaStore, useAuthStore, useUiStore} from "../../../hooks";
import {AreaModal, AreaRow, CrudTable} from "../components";
import {RBACTypes} from "../../admin/types/RBAC-types.ts";


export const Areas = () => {

    const headers = [
        'ID',
        'Name',
        'Description'
    ]

    const { areas } = useAreaStore();
    const { showAreaModal } = useUiStore();
    const { role } = useAuthStore();

    return (
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    Areas
                </h1>

                {
                    (role === RBACTypes.ADMIN) &&
                    (
                        <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={showAreaModal}>
                            Create Area
                        </button>
                    )
                }

                {/* Table */}
                <CrudTable headers={headers}>
                    {
                        areas.map((area) => (
                            <AreaRow key={area.areaId} {...area} />
                        ))
                    }
                </CrudTable>

                <AreaModal />
            </div>
    )
}
