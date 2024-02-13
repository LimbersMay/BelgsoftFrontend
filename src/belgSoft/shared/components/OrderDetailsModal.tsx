import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {useMenuStore, useUiStore} from "../../../hooks";
import {CrudTable} from "./CrudTable.tsx";
import {SelectMenuRow} from "./SelectMenuRow.tsx";
import {Menu} from "../../admin";

interface OrderDetailsModalProps {
    productsToView: Menu[];
}

export const OrderDetailsModal = ({ productsToView }: OrderDetailsModalProps) => {

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
                        isShowingOrderDetailModalToAdd ? (
                            menus.map((menu) => (
                                <SelectMenuRow key={menu.menuId} {...menu} />
                            ))
                        ) : (
                            productsToView.map((product) => (
                                <SelectMenuRow key={product.menuId} {...product} />
                            ))
                        )
                    }
                </CrudTable>
            </div>
        </ModalLayout>
    )
}