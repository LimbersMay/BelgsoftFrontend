import * as Yup from "yup";
import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useMenuStore} from "../../../hooks";
import {useUiStore} from "../../../hooks";
import {getDirtyValues} from "../../../helpers/getDirtyValues.ts";
import {ModalField} from "./ModalField.tsx";
import {Menu} from "../../admin";
import {ModalSelect} from "./ModalSelect.tsx";

const initialValues: Menu = {
    name: "",
    menuId: "",
    description: "",
    category: "",
    price: 0,
    isAvailable: false,
    image: "",
    categoryId: "",
}

export const MenuModal = () => {

    const { activeMenu, startUpdatingMenu, setActiveMenu, startCreatingMenu } = useMenuStore();
    const { isShowingMenuModal, hideMenuModal } = useUiStore();

    const handleClose = () => {
        hideMenuModal();
        setActiveMenu(null);
    }

    const onEditRecord = async (values: Partial<Menu>) => {

        const dirtyValues = getDirtyValues<Menu>(values, activeMenu);

        if (Object.keys(dirtyValues).length === 0) return hideMenuModal();

        dirtyValues.menuId = `${activeMenu?.menuId}`

        await startUpdatingMenu(dirtyValues);

        setActiveMenu(null);
        hideMenuModal();
    }

    const onCreateRecord = async (values: Menu) => {
        await startCreatingMenu(values);
        hideMenuModal();
    }

    return (
        <ModalLayout
            mode={
                activeMenu
                    ? "Update"
                    : "Create"
            }
            show={isShowingMenuModal}
            onClose={handleClose}
        >
            <Formik
                initialValues={ activeMenu ?? initialValues }
                onSubmit={
                    activeMenu
                        ? onEditRecord
                        : onCreateRecord
                }
                validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    description: Yup.string().required("Description is required")
                })}
            >
                {
                    ({}) => (
                        <Form className="flex flex-col gap-2">

                            <ModalField name="name" type="text" fieldName="Menu name" />
                            <ErrorMessage name="name" component="div" className="font-bold text-red-500" />

                            <ModalField name="description" type="text" />
                            <ErrorMessage name="description" component="div" className="font-bold text-red-500" />


                            <ModalSelect
                                name={"categoryId"}
                                fieldName={"Category"}
                                options={[
                                        { value: "da47c63f-196a-4240-bf58-846fd7f0931d", label: "Food" },
                                        { value: "c1b6913e-78a1-407a-9e4b-49bb007b81c0", label: "Drink" },
                                        { value: "5ff6a9c3-bfb4-4269-b8d6-22f620414199", label: "Dessert" }
                                    ]
                                }
                            />

                            <ModalField name="price" type="number" />
                            <ErrorMessage name="price" component="div" className="font-bold text-red-500" />

                            <div className="flex items-center mb-4">
                                <Field type="checkbox" className="w-4 h-4 text-green-600 rounded" id="isAvailable" name="isAvailable"/>
                                <label htmlFor="isAvailable" className="ml-2 text-green-700 font-bold">Available</label>
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
                            >
                                {
                                    activeMenu
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