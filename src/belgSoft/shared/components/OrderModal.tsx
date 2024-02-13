import {Form, Formik} from "formik";
import * as Yup from "yup";
import {ModalField, ModalSelect} from "./"
import {useAreaStore, useOrderStore, useTablesStore, useUiStore} from "../../../hooks";
import {Menu, Order} from "../../admin";
import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {OrderDetailsModal} from "./OrderDetailsModal.tsx";

interface OrderModalProps extends Omit<Order, "area" | "tableNumber" | "orderStatus" | "orderId"> {
}



export const OrderModal = () => {

    const { areas } = useAreaStore();
    const { tables } = useTablesStore();
    const { startCreatingOrder } = useOrderStore();
    const { isShowingOrderModal, hideOrderModal, showOrderDetailModalToEdit, showOrderDetailModalToAdd } = useUiStore();

    const initialValues: OrderModalProps = {
        userName: "",
        areaId: areas[0]?.areaId ?? "",
        customerName: "",
        quantity: 0,
        price: 0,
        tableId: tables[0]?.id ?? "",
        menuItems: []
    }

    const handleClose = () => {
        hideOrderModal();
    }

    const onCreateRecord = async (values: OrderModalProps) => {

        const area = areas.find(area => area.areaId === values.areaId)?.name;
        const table = tables.find(table => table.id === values.tableId)?.number;

        const dataToPrint = {
            areaTitle: area,
            tableTitle: table,
            productsInOrder: values.menuItems.map( menu => ({productName: menu.name, quantity: menu.quantity})),
            customerName: values.customerName
        }

        await startCreatingOrder(values, dataToPrint);

        hideOrderModal();
    }

    const calculateOrderQuantity = (menuItems: Menu[]) => {
        return menuItems.reduce((acc, menu) => acc + menu.quantity, 0);
    }

    const calculateOrderPrice = (menuItems: Menu[]) => {
        return menuItems.reduce((acc, menu) => acc + (menu.price * menu.quantity), 0);
    }

    return (
        <ModalLayout
            mode={"Create"}
            show={isShowingOrderModal}
            onClose={handleClose}
        >
            <Formik
                initialValues={ initialValues }
                onSubmit={onCreateRecord}
                validationSchema={Yup.object({
                })}
            >
                {
                    ({
                        values
                     }) => (
                        <Form className="flex flex-col gap-2">

                            <ModalField
                                name="customerName"
                                type="text"
                                fieldName={"Customer name"}
                            />

                            <div className="flex justify-between gap-5">
                                <button
                                    className="mt-4 flex w-full items-center justify-between rounded bg-indigo-700 px-4 py-2 text-left text-white hover:bg-indigo-800"
                                    onClick={showOrderDetailModalToAdd}
                                    type={"button"}
                                >
                                    Add products

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>

                                <button
                                    className="mt-4 flex w-full items-center justify-between rounded border-2 border-gray-500 px-4 py-2 text-left text-gray-500 hover:border-gray-600"
                                    onClick={showOrderDetailModalToEdit}
                                    type={"button"}
                                >
                                    View products

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>

                                </button>
                            </div>

                            <ModalSelect
                                name="areaId"
                                fieldName={"Area"}
                                options={areas.map(area => ({ value: area.areaId, label: area.name }))}
                            />

                            <ModalSelect
                                name="tableId"
                                fieldName={"Table"}
                                options={tables.map(table => ({ value: table.id, label: table.number }))}
                            />

                            <ModalField
                                name="quantity"
                                type="number"
                                disabled
                                value={values.menuItems ? calculateOrderQuantity(values.menuItems) : 0}
                            />

                            <ModalField
                                name="price"
                                type="number"
                                fieldName={"Total price"}
                                disabled
                                value={values.menuItems ? calculateOrderPrice(values.menuItems) : 0}
                            />

                            <button
                                type="submit"
                                className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                            >
                                Create
                            </button>

                            <OrderDetailsModal productsToView={ values.menuItems }/>
                        </Form>
                    )
                }
            </Formik>
        </ModalLayout>
    )
}