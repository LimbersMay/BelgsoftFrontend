import {Form, Formik, Field, ErrorMessage} from "formik";
import {User} from "../interfaces";
import {useRoleStore, useUiStore, useUsersStore, useUserStateStore} from "../../../hooks";
import * as Yup from "yup";
import { getDirtyValues} from "../../../helpers/getDirtyValues.ts";

export type CreateUserModalProps = Pick<User, "Id" | "username" | "email" | "roleId" | "planId" | "statusId">

export const CreateUserModal = () => {

    const {hideCreatingUserModal, hideUpdatingUserModal, isCreatingUserModalOpen, isUpdatingUserModalOpen} = useUiStore();

    const { roles } = useRoleStore();
    const { userStates } = useUserStateStore();
    const {activeUser, setActiveUser, startUpdatingUser } = useUsersStore();

    let initialValues: CreateUserModalProps = {
        Id: activeUser?.Id || "",
        username: activeUser?.username || "",
        email: activeUser?.email || "",
        roleId: activeUser?.roleId || "0",
        planId: activeUser?.planId || "",
        statusId: activeUser?.statusId || ""
    }

    const onClose = () => {
        hideCreatingUserModal();
        hideUpdatingUserModal();

        setActiveUser(null);
    }

    const onSubmit = async (values: CreateUserModalProps) => {

        const difference = getDirtyValues<CreateUserModalProps>(values, initialValues);
        difference.Id = values.Id;

        await startUpdatingUser(difference);
        onClose();
    }

    return (
        <>
            {
                (isCreatingUserModalOpen || isUpdatingUserModalOpen ) && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                        <div className="relative z-50 bg-white p-4 max-w-md mx-auto rounded shadow-lg flex flex-col gap-2">
                            {
                                isCreatingUserModalOpen
                                ? (
                                    <h2 className="text-2xl font-bold text-green-800">
                                        <span className="text-neutral-950">Create</span>
                                        <span className="text-green-800"> User</span>
                                    </h2>
                                ) : (
                                    <h2 className="text-2xl font-bold text-green-800">
                                         <span className="text-neutral-950">Update</span>
                                            <span className="text-green-800"> User</span>
                                    </h2>
                                )
                            }

                            <hr/>

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={Yup.object({
                                    username: Yup.string()
                                        .required('Required'),
                                    email: Yup.string()
                                        .email('Invalid email address')
                                        .required('Required'),
                                })}
                            >
                                {
                                    ({}) => (
                                        <Form className="flex flex-col gap-2">

                                            <div className="flex flex-col">
                                                <label htmlFor="username" className="font-bold text-green-800">Name</label>
                                                <Field
                                                    type="text"
                                                    name="username"
                                                    placeholder="Name"
                                                    className="w-96 rounded-md p-2 border-2"
                                                />
                                            </div>

                                            <ErrorMessage name={"username"} component="h3" className="font-bold text-red-500"/>

                                            <div className="flex flex-col">
                                                <label htmlFor="email" className="font-bold text-green-800">Email</label>
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="w-96 rounded-md p-2 border-2"
                                                />
                                            </div>

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
                                                            {role.name.charAt(0).toUpperCase() + role.name.slice(1).toLowerCase()}
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
                                                <label htmlFor="stateId" className="font-bold text-green-800">Status</label>
                                                <Field
                                                    type="text"
                                                    name="stateId"
                                                    placeholder="State"
                                                    className="w-96 rounded-md p-2 border-2"
                                                    as="select"
                                                >
                                                    <option value="">Select status</option>
                                                    {
                                                        userStates.map((userState) => (
                                                            <option
                                                                key={userState.id}
                                                                value={userState.id}
                                                            >
                                                                {
                                                                    userState.name.charAt(0).toUpperCase() + userState.name.slice(1).toLowerCase()
                                                                }
                                                            </option>
                                                        ))
                                                    }
                                                </Field>
                                            </div>

                                            {
                                                isCreatingUserModalOpen
                                                ? (
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 w-full text-white bg-green-500 rounded hover:bg-green-600"
                                                    >
                                                        Create
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 w-full text-white bg-green-500 rounded hover:bg-green-600"
                                                    >
                                                        Update
                                                    </button>
                                                )
                                            }
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>
                )
            }
        </>
    );
};