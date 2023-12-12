import {BaseLayout} from "../../../layouts";
import {ReactElement, useEffect} from "react";
import {useAreaStore, useTablesStore} from "../../../hooks";


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
    ]

    const { startLoadingTables } = useTablesStore();
    const { startLoadingAreas } = useAreaStore();


    // load the data
    useEffect(() => {
        (async () => {
            await startLoadingTables();
            await startLoadingAreas();
        })()
    }, [])

    return (
        <BaseLayout navLinks={navLinks}>
            {children}
        </BaseLayout>
    )
}