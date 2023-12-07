import {Form, Formik, Field, ErrorMessage} from "formik";
import {User} from "../interfaces";
import {useRoleStore, useUiStore, useUsersStore, useUserStateStore} from "../../../hooks";
import * as Yup from "yup";
import { getDirtyValues} from "../../../helpers/getDirtyValues.ts";
import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {ModalField} from "../../components/ModalField.tsx";
import {firstCapitalLetter} from "../../../helpers/firstCapitalLetter.ts";

export interface CreateUserModalProps extends Pick<User, "Id" | "username" | "email" | "roleId" | "planId" | "statusId" | "status" | "role"> {
    password: string;
}

export const CreateUserModal = () => {

    const { hideUserModal, isShowingUserModal } = useUiStore();

    const { roles } = useRoleStore();
    const { userStates } = useUserStateStore();
    const {activeUser, setActiveUser, startUpdatingUser, startCreatingUser } = useUsersStore();

    let createUserInitialValues: CreateUserModalProps;

    if (activeUser) {
        createUserInitialValues = {
            ...activeUser,
            password: "",
        };
    } else {

        createUserInitialValues = {
            Id: "0",
            username: "",
            email: "",
            roleId: roles[1]?.id ?? "0",
            planId: "2",
            statusId: userStates[0]?.id ?? "0",
            status: userStates[0]?.name ?? "",
            role: roles[1]?.roleName ?? "",
            password: "default",
        };
    }

    const onClose = () => {
        hideUserModal();

        setActiveUser(null);
    }

    const onCreateUser = async (values: CreateUserModalProps) => {
        hideUserModal();

        await startCreatingUser(values);

        setActiveUser(null);
    }

    const onEditUser = async (values: Partial<CreateUserModalProps>) => {
        hideUserModal();

        const dirtyValues = getDirtyValues<CreateUserModalProps>(values, createUserInitialValues);
        dirtyValues.Id = createUserInitialValues.Id;

        await startUpdatingUser(dirtyValues);

        setActiveUser(null);
    }

    return (
        <>
            <ModalLayout
                mode={activeUser ? "Update" : "Create"}
                show={isShowingUserModal}
                onClose={onClose}
            >
                <Formik
                    initialValues={ createUserInitialValues }
                    onSubmit={
                        activeUser
                            ? onEditUser
                            : onCreateUser
                    }
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required')
                    })}
                >
                    {
                        ({}) => (
                            <Form className="flex flex-col gap-2">

                                <ModalField
                                    name={"username"}
                                    type={"text"}
                                />

                                <ErrorMessage
                                    name={"username"}
                                    component="h3"
                                    className="font-bold text-red-500"
                                />

                                <ModalField name={"email"} type={"email"} />

                                <ErrorMessage name={"email"} component="h3" className="font-bold text-red-500"/>

                                <div className="flex flex-col">
                                    <label htmlFor="roleId" className="font-bold text-green-800">Role</label>
                                    <Field
                                        type="text"
                                        name="roleId"
                                        placeholder="Role"
                                        className="w-96 rounded-md p-2 border-2"
                                        as="select"
                                    >
                                        {roles.map((role) => (
                                            <option
                                                key={role.id}
                                                value={role.id} // Establece el valor del option como el role.id
                                            >
                                                {
                                                    firstCapitalLetter(role.roleName)
                                                }
                                            </option>
                                        ))}
                                    </Field>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="planId" className="font-bold text-green-800">Plan</label>
                                    <Field
                                        type="text"
                                        name="planId"
                                        placeholder="Plan"
                                        className="w-96 rounded-md p-2 border-2"
                                        as="select"
                                        disabled
                                    >
                                        <option value="">Select plan</option>
                                    </Field>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="statusId" className="font-bold text-green-800">Status</label>
                                    <Field
                                        type="text"
                                        name="statusId"
                                        placeholder="State"
                                        className="w-96 rounded-md p-2 border-2"
                                        as="select"
                                    >
                                        <option value="">Select status</option>
                                        {
                                            userStates.map((userStatus) => (
                                                <option
                                                    key={userStatus.id}
                                                    value={userStatus.id}
                                                >
                                                    {
                                                        userStatus.name.charAt(0).toUpperCase() + userStatus.name.slice(1).toLowerCase()
                                                    }
                                                </option>
                                            ))
                                        }
                                    </Field>
                                </div>

                                <ModalField name="password" type="password" />

                                <button
                                    className="px-4 py-2 w-full text-white bg-green-500 rounded hover:bg-green-600"
                                    type="submit"
                                >
                                    {
                                        activeUser
                                            ? "Update"
                                            : "Create"
                                    }
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </ModalLayout>
        </>
    );
};