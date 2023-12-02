import {ReactElement} from "react";
import {BaseLayout} from "../../layouts/BaseLayout.tsx";

export const AuthLayout = ({ children }: { children: ReactElement }) => {

    const navLinks = [
        {
            name: "Login",
            path: "/auth/login"
        },
        {
            name: "Register",
            path: "/auth/register"
        }
    ]

    return (
        <BaseLayout navLinks={navLinks}>
            { children }
        </BaseLayout>
    )
}