import {BaseLayout} from "../../../layouts";
import {ReactElement, useEffect} from "react";
import {useUsersStore} from "../../../hooks/useUsersStore.ts";

export const AdminLayout = ({ children }: { children: ReactElement }) => {
    const navLinks = [
        {
            name: "Users",
            path: "/users"
        },
        {
            name: "Roles",
            path: "/roles"
        },
    ]

    // start loading the following data:
    // 1. Users who were created by the current user
    const { startLoadingUsers } = useUsersStore();

    useEffect(() => {
        (async () => {
            await startLoadingUsers();
        })()
    }, []);

    return (
        <BaseLayout navLinks={navLinks}>
            {children}
        </BaseLayout>
    )
}