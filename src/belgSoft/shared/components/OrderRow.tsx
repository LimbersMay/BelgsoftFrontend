import {useAuthStore, useOrderStore} from "../../../hooks";
import {RBACTypes, Order} from "../../admin";

export const OrderRow = (order: Order) => {

    const { role } = useAuthStore();
    const { startDeletingOrder, startCheckingOutOrder } = useOrderStore();

    const handleCheckout = async () => {
        await startCheckingOutOrder(order);
    }

    const {  orderId, customerName, userName, tableNumber, menuItems, orderStatus, area, price, quantity  } = order;

    return (
        <tr>
            <td className="px-4 py-2 border">{orderId}</td>
            <td className="px-4 py-2 border">{ userName }</td>
            <td className="px-4 py-2 border">{customerName}</td>
            <td className="px-4 py-2 border">{area}</td>
            <td className="px-4 py-2 border">{tableNumber}</td>
            <td className="px-4 py-2 border">{menuItems.length}</td>
            <td
                className={`px-4 py-2 border text-white ${orderStatus !== "PAID" ? "bg-amber-500" : "bg-green-500"}`}
            >
                {orderStatus}
            </td>
            <td className="px-4 py-2 border">{quantity}</td>
            <td className="px-4 py-2 border">{price}</td>
            <td className="px-4 py-2 border text-left">
                {
                    (role === RBACTypes.ADMIN) && (
                        <>
                            <button
                                className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                                onClick={() => startDeletingOrder(orderId)}
                            >
                                Delete
                            </button>

                            {/* View Button */}
                            <button
                                onClick={handleCheckout}
                                className="px-4 py-2 ml-4 text-white w-fit bg-gray-500 rounded hover:bg-gray-600"
                            >
                                Checkout
                            </button>
                        </>
                    )
                }
            </td>
        </tr>
    )
}