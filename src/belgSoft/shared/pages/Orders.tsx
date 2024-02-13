import {useAuthStore, useUiStore, useOrderStore} from "../../../hooks";
import {CrudTable, OrderRow, OrderModal} from "../components";

export const Orders = () => {
    const headers = [
        'ID',
        'Waiter',
        'Customer name',
        'Area',
        'Table number',
        'Order products',
        'Order status',
        'Quantity',
        'Total price'
    ]

    const {orders} = useOrderStore();
    const {showOrderModal} = useUiStore();
    useAuthStore();

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-neutral-900">
                Orders
            </h1>

            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={showOrderModal}>
                Create Order
            </button>

            {/* Table */}
            <CrudTable headers={headers}>
                {
                    orders.map((order) => (
                        <OrderRow key={order.orderId} {...order} />
                    ))
                }
            </CrudTable>

            <OrderModal />
        </div>
    )
}
