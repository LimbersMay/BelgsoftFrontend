import {NavLink} from "react-router-dom";
import {ReactElement} from "react";

interface NavLink {
    name: string,
    path: string
}

interface BaseLayoutProps {
    children: ReactElement,
    navLinks: NavLink[]
}

export const BaseLayout = ({ children, navLinks }: BaseLayoutProps ) => {

    const isActiveLink = ({ isActive}: { isActive: boolean}) => {
        if (isActive) {
            return "text-neutral-200"
        }
        return "text-neutral-400"
    }

    return (
        <div>
            <header className="flex justify-between bg-neutral-900 p-4 text-xl">

                <div className="font-bold">
                    <NavLink
                        to="/"
                        className={isActiveLink}
                    >
                        BelgSoft
                    </NavLink>
                </div>

                <div className="flex items-center gap-10 font-bold">
                    {
                        navLinks.map(({ path, name }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={isActiveLink}
                            >
                                {name}
                            </NavLink>
                        ))
                    }
                </div>
            </header>

            { children }
        </div>
    )
}