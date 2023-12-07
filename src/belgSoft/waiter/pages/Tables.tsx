import {HomeLayout} from "../layouts/HomeLayout.tsx";

export const Products = () => {
    return (
        <HomeLayout>
            <div className="flex p-10 flex-col items-center justify-center">
                <h1 className={"text-4xl text-neutral-900"}>
                    Productos
                </h1>
            </div>
        </HomeLayout>
    )
}