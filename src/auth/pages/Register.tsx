import {AuthLayout} from "../layouts/AuthLayout.tsx";
import {Field} from "../../components/Field.tsx";

export const Register = () => {
    return (
        <AuthLayout>
            {/* Main container */}
            <div className="flex justify-center">
                {/* Form container */}
                <div className="mt-10 mb-4 flex w-fit flex-col gap-5 rounded bg-neutral-800 p-4 px-8 pt-6 pb-8 shadow-md">
                    <h1 className= "text-3xl font-bold text-white">
                        Register
                    </h1>

                    <form className="flex flex-col gap-5">

                        <Field type={"text"} name={"username"} />

                        <Field type={"email"} name={"email"} />

                        <Field type={"password"} name={"password"} />

                        <button
                            type="submit"
                            className="w-96 bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Register
                        </button>
                    </form>
                </div>

            </div>
        </AuthLayout>
    )
}