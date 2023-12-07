import {ModalLayout} from "./UserModal.tsx";
import {useRoleStore, useUiStore} from "../../../hooks";
import {Form, Formik} from "formik";
import {Role} from "../interfaces/Role.ts";
import {ModalField} from "../../components/ModalField.tsx";

const defaultValues: Role = {
    id: "0",
    roleName: "",
    value: "",
}

export const CreateRoleModal = () => {

    const { isShowingRoleModal, hideRoleModal } = useUiStore();
    const { activeRole , setActiveRole} = useRoleStore();

    const handleClose = () => {
        hideRoleModal();
        setActiveRole(null);
    }

    const onSubmit = async (values: Role) => {
        console.log(values);
    }

    return (
        <ModalLayout
            mode={
                activeRole
                    ? "Update"
                    : "Create"
            }
            show={isShowingRoleModal}
            onClose={handleClose}
        >
            <Formik
                initialValues={ activeRole ?? defaultValues }
                onSubmit={onSubmit}
            >
                {
                    ({}) => (
                        <Form className="flex flex-col gap-2">

                            <ModalField name={"roleName"} type={"text"} fieldName={"Role name"} />

                            <ModalField name={"value"} type={"text"} />

                            <button
                                type="submit"
                                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
                            >
                                {
                                    activeRole
                                        ? "Update"
                                        : "Create"
                                }
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </ModalLayout>
    )
}
