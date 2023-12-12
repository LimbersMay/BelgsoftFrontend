import {BaseLayout} from "../../../layouts";
import {ReactElement, useEffect} from "react";
import {useTablesStore} from "../../../hooks/useTablesStore.ts";
import {useAreaStore} from "../../../hooks/useAreaStore.ts";

export const HomeLayout = ({ children }: {children: ReactElement}) => {

    const navLinks = [
        {
            name: "Tables",
            path: "/tables"
        },
        {
            name: "Areas",
            path: "/areas"
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