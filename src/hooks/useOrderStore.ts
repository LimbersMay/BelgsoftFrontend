import {useAppDispatch, useAppSelector} from "../store";
import {belgsoftApi} from "../api";
import {checkoutOrder, deleteOrder, selectOrder, setOrder, setOrders} from "../store/belgsoft/admin/ordersSlice.ts";
import {Order} from "../belgSoft/admin";

export const useOrderStore = () => {

    const dispatch = useAppDispatch();
    const { orders } = useAppSelector(selectOrder);

    const startLoadingOrders = async () => {
        const response = await belgsoftApi.get('/orders');

        dispatch(setOrders(response.data));
    }

    const startCreatingOrder = async (order: Partial<Order>, dataToPrint: any ) => {

        const response = await belgsoftApi.post('/orders', {...order});
        await belgsoftApi.post('/orders/print', {...dataToPrint });

        dispatch(setOrder(response.data));
    }

    const startDeletingOrder = async (menuId: string) => {
        await belgsoftApi.delete(`/orders/${menuId}`);

        dispatch(deleteOrder(menuId));
    }

    const startCheckingOutOrder = async (order: Order) => {
        const response = await belgsoftApi.post(`/orders/${order.orderId}/checkout`);

        dispatch(checkoutOrder(response.data));
    }

    return {
        // Properties
        orders,

        // Methods
        startLoadingOrders,
        startCreatingOrder,
        startDeletingOrder,
        startCheckingOutOrder
    }
}