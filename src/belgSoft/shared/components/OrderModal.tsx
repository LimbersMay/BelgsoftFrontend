import {Form, Formik} from "formik";
import * as Yup from "yup";
import {ModalField, ModalSelect} from "./"
import {useAreaStore, useTablesStore, useUiStore} from "../../../hooks";
import {Order} from "../../admin";
import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {OrderDetailsModal} from "./OrderDetailsModal.tsx";

const initialValues: Order = {
    orderId: "",
    customerName: "",
    area: "",
    tableNumber: 0,
    orderStatus: "",
    quantity: 0,
    price: 0,
    tableId: "",
    menus: []
}

export const OrderModal = () => {

    const { areas } = useAreaStore();
    const { tables } = useTablesStore();
    const { isShowingOrderModal, hideOrderModal, showOrderDetailModalToEdit, showOrderDetailModalToAdd } = useUiStore();

    const handleClose = () => {
        hideOrderModal();
    }

    const onCreateRecord = async (values: Order) => {
        console.log(values)
        hideOrderModal();
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
                    ({}) => (
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

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>

                            <ModalSelect
                                name="area"
                                options={areas.map(area => ({ value: area.areaId, label: area.name }))}
                            />

                            <ModalSelect
                                name="table"
                                options={tables.map(table => ({ value: table.id, label: table.number }))}
                            />

                            <ModalField
                                name="quantity"
                                type="number"
                            />

                            <ModalField
                                name="price"
                                type="number"
                                fieldName={"Total price"}
                                disabled
                            />

                            <button
                                type="submit"
                                className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                            >
                                Create
                            </button>
                        </Form>
                    )
                }
            </Formik>

            <OrderDetailsModal />
        </ModalLayout>
    )
}