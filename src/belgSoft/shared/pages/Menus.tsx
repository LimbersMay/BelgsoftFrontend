import {RBACTypes} from "../../admin";
import {useAuthStore, useMenuStore, useUiStore} from "../../../hooks";
import {MenuRow, MenuModal, CrudTable} from "../components";


export const Menus = () => {

    const headers = [
        'ID',
        'Name',
        'Description',
        'Price',
        'Available',
        'Category',
    ]

    const { menus } = useMenuStore();
    const { showMenuModal } = useUiStore();
    const { role } = useAuthStore();

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-neutral-900">
                Menus
            </h1>

            {
                (role === RBACTypes.ADMIN) &&
                (
                    <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={showMenuModal}>
                        Create Menu
                    </button>
                )
            }

            {/* Table */}
            <CrudTable headers={headers}>
                {
                    menus.map((menu) => (
                        <MenuRow key={menu.menuId} {...menu} />
                    ))
                }
            </CrudTable>

            <MenuModal />
        </div>
    )
}