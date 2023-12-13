import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {useMenuStore, useUiStore} from "../../../hooks";
import {CrudTable} from "./CrudTable.tsx";
import {SelectMenuRow} from "./SelectMenuRow.tsx";

export const OrderDetailsModal = () => {

    const {isShowingOrderDetailModalToAdd, isShowingOrderDetailModalToEdit, hideOrderDetailModal} = useUiStore();
    const {menus} = useMenuStore();

    const headers = [
        'ID',
        'Name',
        'Price',
        'Available',
        'Quantity',
    ]

    const handleClose = () => {
        hideOrderDetailModal();
    }

    return (
        <ModalLayout
            mode={"Select"}
            show={isShowingOrderDetailModalToAdd || isShowingOrderDetailModalToEdit}
            onClose={handleClose}
        >
            <div className="p-10">
                <h1 className="text-4xl font-bold text-neutral-900">
                    {
                        isShowingOrderDetailModalToAdd ? "Select menu" : "Edit menu"
                    }
                </h1>

                {/* Table */}
                <CrudTable headers={headers}>
                    {
                        menus.map((menu) => (
                            <SelectMenuRow key={menu.menuId} {...menu} />
                        ))
                    }
                </CrudTable>

                <div className="flex justify-end ">
                    <button className="px-4 py-2 mt-4 w-28 text-white bg-green-500 rounded hover:bg-green-600">
                        Save
                    </button>
                </div>
            </div>
        </ModalLayout>
    )
}