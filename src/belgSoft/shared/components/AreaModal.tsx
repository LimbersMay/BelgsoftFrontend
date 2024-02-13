import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from "yup";
import {useAreaStore} from "../../../hooks";
import {useUiStore} from "../../../hooks";
import {getDirtyValues} from "../../../helpers/getDirtyValues.ts";
import {ModalField} from "./ModalField.tsx";
import {Area} from "../../admin";

const initialValues: Area = {
    name: "",
    areaId: "",
    description: ""
}

export const AreaModal = () => {

    const { activeArea, startUpdatingArea, setActiveArea, startCreatingArea } = useAreaStore();
    const { isShowingAreaModal, hideAreaModal } = useUiStore();

    const handleClose = () => {
        hideAreaModal();
        setActiveArea(null);
    }

    const onEditArea = async (values: Partial<Area>) => {

        const dirtyValues = getDirtyValues<Area>(values, activeArea);

        if (Object.keys(dirtyValues).length === 0) return;

        dirtyValues.areaId = `${activeArea?.areaId}`

        await startUpdatingArea(dirtyValues);

        setActiveArea(null);
        hideAreaModal();
    }

    const onCreateArea = async (values: Area) => {
        await startCreatingArea(values);
        hideAreaModal();
    }

    console.log(activeArea)

    return (
        <ModalLayout
            mode={
                activeArea
                    ? "Update"
                    : "Create"
            }
            show={isShowingAreaModal}
            onClose={handleClose}
        >
            <Formik
                initialValues={ activeArea ?? initialValues }
                onSubmit={
                    activeArea
                        ? onEditArea
                        : onCreateArea
                }
                validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    description: Yup.string().required("Description is required")
                })}
            >
                {
                    ({}) => (
                        <Form className="flex flex-col gap-2">

                            <ModalField name="name" type="text" fieldName="Area name" />
                            <ErrorMessage name="name" component="div" className="font-bold text-red-500" />

                            <ModalField name="description" type="text" />
                            <ErrorMessage name="description" component="div" className="font-bold text-red-500" />

                            <button
                                type="submit"
                                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
                            >
                                {
                                    activeArea
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
