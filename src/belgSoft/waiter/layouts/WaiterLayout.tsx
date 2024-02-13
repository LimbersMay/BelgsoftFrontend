import {BaseLayout} from "../../../layouts";
import {ReactElement, useEffect} from "react";
import {useAreaStore, useMenuStore, useTablesStore} from "../../../hooks";
import {useOrderStore} from "../../../hooks/useOrderStore.ts";


export const WaiterLayout = ({ children }: {children: ReactElement}) => {

    const navLinks = [
        {
            name: "Tables",
            path: "/tables"
        },
        {
            name: "Areas",
            path: "/areas"
        },
        {
            name: "Menus",
            path: "/menus"
        },
        {
            name: "Orders",
            path: "/orders"
        },
    ]

    const { startLoadingTables } = useTablesStore();
    const { startLoadingAreas } = useAreaStore();
    const { startLoadingMenus } = useMenuStore();
    const { startLoadingOrders } = useOrderStore();


    // load the data
    useEffect(() => {
        (async () => {
            await startLoadingTables();
            await startLoadingAreas();
            await startLoadingMenus();
            await startLoadingOrders();
        })()
    }, [])

    return (
        <BaseLayout navLinks={navLinks}>
            {children}
        </BaseLayout>
    )
}