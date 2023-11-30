import {ReactElement} from "react";
import {BaseLayout} from "../../layouts/BaseLayout.tsx";

export const AuthLayout = ({ children }: { children: ReactElement }) => {

    const navLinks = [
        {
            name: "Login",
            path: "/login"
        },
        {
            name: "Register",
            path: "/register"
        }
    ]

    return (
        <BaseLayout navLinks={navLinks}>
            { children }
        </BaseLayout>
    )
}