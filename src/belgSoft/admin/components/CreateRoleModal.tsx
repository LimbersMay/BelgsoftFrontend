import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {useRoleStore, useUiStore} from "../../../hooks";
import {ErrorMessage, Form, Formik} from "formik";
import {Role} from "../interfaces/Role.ts";
import {ModalField} from "../../components/ModalField.tsx";
import * as Yup from "yup";
import {getDirtyValues} from "../../../helpers/getDirtyValues.ts";

const defaultValues: Role = {
    id: "0",
    roleName: "",
    value: "",
}

export const CreateRoleModal = () => {

    const { isShowingRoleModal, hideRoleModal } = useUiStore();
    const { activeRole , setActiveRole, startCreatingRole, startUpdatingRole } = useRoleStore();

    const handleClose = () => {
        hideRoleModal();
        setActiveRole(null);
    }

    const onCreateRole = async (values: Role) => {
        hideRoleModal();

        await startCreatingRole(values);

        setActiveRole(null);
    }

    const onEditRole = async (values: Partial<Role>) => {
        hideRoleModal();

        const dirtyValues = getDirtyValues<Role>(values, activeRole);

        if (Object.keys(dirtyValues).length === 0) return;

        dirtyValues.id = `${activeRole?.id}`

        await startUpdatingRole(dirtyValues);

        setActiveRole(null);
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
                onSubmit={
                    activeRole
                        ? onEditRole
                        : onCreateRole
                }
                validationSchema={Yup.object({
                    roleName: Yup.string()
                        .required('Role name is required'),

                    value: Yup.string()
                        .required('Value is required'),
                })}
            >
                {
                    ({}) => (
                        <Form className="flex flex-col gap-2">

                            <ModalField name="roleName" type="text" fieldName="Role name" />
                            <ErrorMessage name="roleName" component="div" className="font-bold text-red-500" />

                            <ModalField name="value" type="text" />
                            <ErrorMessage name="value" component="div" className="font-bold text-red-500" />

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
