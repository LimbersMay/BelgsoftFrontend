import {useUiStore} from "../../../hooks";
import {Menu, Order} from "../../admin";
import {useState} from "react";
import {useFormikContext} from "formik";

export const SelectMenuRow = (menu: Menu) => {

    const [quantity, setQuantity] = useState(0);
    const { setFieldValue, values } = useFormikContext<Order>();
    const { isShowingOrderDetailModalToAdd } = useUiStore();

    const calculateOrderQuantity = (menus: Menu[]) => {
        return menus.reduce((acc, menu) => acc + menu.quantity, 0);
    }

    const calculateOrderPrice = (menus: Menu[]) => {
        return menus.reduce((acc, menu) => acc + (menu.price * menu.quantity), 0);
    }

    const handleAdd = async () => {
        // Create a new menu item with the quantity
        const newMenu = {
            ...menu,
            quantity
        }

        // Get the current menus from the formik context
        const currentMenus = values.menuItems || [];

        // Find if the menu already exists in the current menus and update the quantity
        const index = currentMenus.findIndex((currentMenu) => currentMenu.menuId === menu.menuId);
        if (index !== -1) {
            currentMenus[index].quantity += quantity;
        } else {
            // Add the new menu to the current menus
            currentMenus.push(newMenu);
        }

        // Set the new menus
        await setFieldValue("menuItems", currentMenus);

        // Calculate the order quantity and price
        const orderQuantity = calculateOrderQuantity(currentMenus);
        const orderPrice = calculateOrderPrice(currentMenus);

        // Set the order quantity and price
        await setFieldValue("quantity", orderQuantity);
        await setFieldValue("price", orderPrice);
    }

    const handleDelete = async () => {
        // Get the current menus from the formik context
        const currentMenus = values.menuItems || [];

        // Filter the current menus to remove the selected menu
        const filteredMenus = currentMenus.filter((currentMenu) => currentMenu.menuId !== menu.menuId);

        // Set the new menus
        await setFieldValue("menuItems", filteredMenus);

        // Calculate the order quantity and price
        const orderQuantity = calculateOrderQuantity(filteredMenus);
        const orderPrice = calculateOrderPrice(filteredMenus);

        // Set the order quantity and price
        await setFieldValue("quantity", orderQuantity);
        await setFieldValue("price", orderPrice);
    }

    const {name, description, price, isAvailable} = menu;

    return (
        <tr>
            <td className="px-4 py-2 border">{name}</td>
            <td className="px-4 py-2 border">{description}</td>
            <td className="px-4 py-2 border">{price}</td>
            <td className={`px-4 py-2 border text-white ${isAvailable ? "bg-green-500" : "bg-red-500"}`}>{isAvailable ? "Yes" : "No"}</td>
            <td className="px-4 py-2 border">
                <input
                    type="number"
                    className="border text-sm rounded-lg block w-full p-2.5 disabled:bg-gray-200"
                    placeholder="Quantity"
                    name={ name }
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    value={menu.quantity}
                    disabled={!isAvailable}
                />
            </td>
            <td className="px-4 py-2 border text-left">

                {
                    isShowingOrderDetailModalToAdd ? (
                        <button
                            className="px-4 py-2 mr-2 w-20 text-white bg-gray-500 rounded hover:bg-gray-600 disabled:bg-gray-400"
                            onClick={handleAdd}
                            type={"button"}
                            disabled={!isAvailable}
                        >
                            Add
                        </button>
                    )
                        : (
                            <button
                                className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                                onClick={handleDelete}
                                type={"button"}
                            >
                                Delete
                            </button>
                        )
                }
            </td>
        </tr>
    )
}