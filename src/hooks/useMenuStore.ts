import {belgsoftApi} from "../api";
import {Menu} from "../belgSoft/admin";
import {useAppDispatch, useAppSelector} from "../store";
import {
    deleteMenu,
    onSetActiveMenu,
    selectMenu,
    setMenu,
    setMenus,
    updateMenu
} from "../store/belgsoft/admin/menuSlice.ts";

export const useMenuStore = () => {

    const dispatch = useAppDispatch();
    const { menus, activeMenu } = useAppSelector(selectMenu);

    const setActiveMenu = (menu: Menu | null) => {
        dispatch(onSetActiveMenu(menu));
    }

    const startLoadingMenus = async () => {
        const response = await belgsoftApi.get('/menu');

        dispatch(setMenus(response.data));
    }

    const startCreatingMenu = async (menu: Menu) => {
        const response = await belgsoftApi.post('/menu', {...menu});

        dispatch(setMenu(response.data));
    }

    const startUpdatingMenu = async (menu: Partial<Menu>) => {
        const response = await belgsoftApi.put(`/menu/${menu.menuId}`, {...menu});

        dispatch(updateMenu({
            ...menu,
            category: response.data.category
        }))
    }

    const startDeletingMenu = async (menuId: string) => {
        await belgsoftApi.delete(`/menu/${menuId}`);

        dispatch(deleteMenu(menuId));
    }

    return {
        // Properties
        menus,
        activeMenu,

        // Methods
        startLoadingMenus,
        startUpdatingMenu,
        startCreatingMenu,
        startDeletingMenu,
        setActiveMenu
    }
}