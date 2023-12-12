import {HomeLayout} from "../layouts/HomeLayout.tsx";
import {CrudTable} from "../../components";
import {useAreaStore} from "../../../hooks/useAreaStore.ts";
import {AreaRow} from "../../shared/components/AreaRow.tsx";
import {useUiStore} from "../../../hooks";
import {AreaModal} from "../../shared/components/AreaModal.tsx";

export const Areas = () => {

    const headers = [
        'ID',
        'Name',
        'Description'
    ]

    const { areas } = useAreaStore();
    const { showAreaModal } = useUiStore();

    return (
        <HomeLayout>
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    Areas
                </h1>

                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={showAreaModal}>
                    Create Area
                </button>

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
        </HomeLayout>
    )
}
