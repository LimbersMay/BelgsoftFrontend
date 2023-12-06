import {BaseLayout} from "../../../layouts";
import {ReactElement} from "react";

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

    return (
        <BaseLayout navLinks={navLinks}>
            {children}
        </BaseLayout>
    )
}