import {BaseLayout} from "../../../layouts";
import {ReactElement, useEffect} from "react";
import {useTablesStore} from "../../../hooks/useTablesStore.ts";

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

    // load the data
    useEffect(() => {
        (async () => {
            await startLoadingTables();
        })()
    }, [])

    return (
        <BaseLayout navLinks={navLinks}>
            {children}
        </BaseLayout>
    )
}