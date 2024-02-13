import {Menu} from "./Menu.ts";

export interface Order {
    orderId: string;
    customerName: string;
    userName: string;
    tableNumber: number;
    tableId: string;
    menuItems: Menu[];
    orderStatus: string;
    area: string;
    areaId: string;
    price: number;
    quantity: number;
}