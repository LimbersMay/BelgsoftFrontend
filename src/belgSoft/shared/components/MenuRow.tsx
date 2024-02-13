import {useAuthStore, useMenuStore, useUiStore} from "../../../hooks";
import {RBACTypes} from "../../admin";
import {Menu} from "../../admin";

export const MenuRow = (menu: Menu) => {
    const { showMenuModal } = useUiStore();
    const { setActiveMenu, startDeletingMenu } = useMenuStore();
    const { role } = useAuthStore();

    const handleEdit = () => {
        showMenuModal();

        setActiveMenu(menu);
    }

    const { menuId, name, description, price, isAvailable, category } = menu;

    return (
        <tr>
            <td className="px-4 py-2 border">{menuId}</td>
            <td className="px-4 py-2 border">{name}</td>
            <td className="px-4 py-2 border">{description}</td>
            <td className="px-4 py-2 border">{price}</td>
            <td className={`px-4 py-2 border text-white ${ isAvailable ? "bg-green-500" : "bg-red-500" }`}>{ isAvailable ? "Yes" : "No" }</td>
            <td className="px-4 py-2 border">{category}</td>
            <td className="px-4 py-2 border text-left">
                {
                    (role === RBACTypes.ADMIN) && (
                        <>
                            <button
                                className="px-4 py-2 mr-2 w-20 text-white bg-green-600 rounded hover:bg-green-600 disabled:bg-green-400"
                                onClick={handleEdit}
                            >
                                Edit
                            </button>
                            <button
                                className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                                onClick={() => startDeletingMenu(menuId)}
                            >
                                Delete
                            </button>
                        </>
                    )
                }
            </td>
        </tr>
    )
}