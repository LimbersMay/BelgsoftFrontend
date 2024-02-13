import {useUiStore} from "../../../hooks";
import {Menu} from "../../admin";
import {useState} from "react";

export const SelectMenuRow = (menu: Menu) => {
    const {hideOrderDetailModal} = useUiStore();

    const [quantity, setQuantity] = useState(0);
    const { isShowingOrderDetailModalToAdd } = useUiStore();

    const handleAdd = () => {
        hideOrderDetailModal();
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
                    value={quantity}
                    disabled={!isAvailable}
                />
            </td>
            <td className="px-4 py-2 border text-left">

                {
                    isShowingOrderDetailModalToAdd ? (
                        <button
                            className="px-4 py-2 mr-2 w-20 text-white bg-gray-500 rounded hover:bg-gray-600 disabled:bg-gray-400"
                            onClick={handleAdd}
                            disabled={!isAvailable}
                        >
                            Add
                        </button>
                    )
                        : (
                            <button
                                className="px-4 py-2 text-white w-20 bg-red-500 rounded hover:bg-red-600 disabled:bg-red-400"
                                onClick={() => console.log("delete")}
                            >
                                Delete
                            </button>
                        )
                }
            </td>
        </tr>
    )
}