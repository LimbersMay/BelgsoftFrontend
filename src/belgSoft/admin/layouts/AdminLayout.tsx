import {BaseLayout} from "../../../layouts";
import {ReactElement, useEffect} from "react";
import {useUsersStore} from "../../../hooks/useUsersStore.ts";
import {useRoleStore} from "../../../hooks/useRoleStore.ts";
import {useUserStateStore} from "../../../hooks/useUserStateStore.ts";

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
        {
            name: "User States",
            path: "/user-states"
        }
    ]

    // start loading the following data:
    // 1. Users who were created by the current user
    const { startLoadingUsers } = useUsersStore();
    const { startLoadingRoles } = useRoleStore();
    const { startLoadingUserStates } = useUserStateStore();

    useEffect(() => {
        (async () => {
            await startLoadingUsers();
            await startLoadingRoles();
            await startLoadingUserStates();
        })()
    }, []);

    return (
        <BaseLayout navLinks={navLinks}>
            {children}
        </BaseLayout>
    )
}