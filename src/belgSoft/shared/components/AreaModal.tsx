import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from "yup";
import {ModalField} from "../../components";
import {useAreaStore} from "../../../hooks/useAreaStore.ts";
import {useUiStore} from "../../../hooks";
import {getDirtyValues} from "../../../helpers/getDirtyValues.ts";

const initialValues: Area = {
    name: "",
    areaId: "",
    description: ""
}

export const AreaModal = () => {

    const { activeArea, startUpdatingArea, setActiveArea } = useAreaStore();
    const { isShowingAreaModal, hideAreaModal } = useUiStore();

    const handleClose = () => {
        hideAreaModal();
        setActiveArea(null);
    }

    const onEditArea = async (values: Partial<Area>) => {

        const dirtyValues = getDirtyValues<Area>(activeArea, values);

        if (Object.keys(dirtyValues).length === 0) return;

        dirtyValues.areaId = `${activeArea?.areaId}`

        await startUpdatingArea(dirtyValues);

        setActiveArea(null);
        hideAreaModal();
    }

    const onCreateArea = (values: Area) => {
        console.log(values);
    }

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
                    roleName: Yup.string()
                        .required('Role name is required'),

                    value: Yup.string()
                        .required('Value is required'),
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
