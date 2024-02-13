import {Table} from "../../interfaces/table.interface.ts";
import {useUiStore} from "../../../hooks";
import {useTablesStore} from "../../../hooks/useTablesStore.ts";
import {ModalLayout} from "../../layouts/ModalLayout.tsx";
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from "yup";
import {getDirtyValues} from "../../../helpers/getDirtyValues.ts";
import {SnackbarUtilities} from "../../../utils";
import {ModalField} from "../../shared";

const defaultValues: Table = {
    id: "0",
    number: "",
    customers: 0,
}

export const TableModal = () => {

    const { isShowingTableModal, hideTableModal } = useUiStore();
    const { activeTable , setActiveTable, startCreatingTable, startUpdatingTable } = useTablesStore();

    const handleClose = () => {
        hideTableModal();
        setActiveTable(null);
    }

    const onCreateTable = async (values: Table) => {
        hideTableModal();

        await startCreatingTable(values);

        setActiveTable(null);
        SnackbarUtilities.success("Table created successfully");
    }

    const onEditTable = async (values: Partial<Table>) => {

        const dirtyValues = getDirtyValues<Table>(values, activeTable);
        dirtyValues.id = `${activeTable?.id}`;

        if (Object.keys(dirtyValues).length === 0) return handleClose();

        await startUpdatingTable(dirtyValues);

        hideTableModal();
        setActiveTable(null);
    }

    return (
        <ModalLayout
            show={isShowingTableModal}
            onClose={handleClose}
            mode={
                activeTable
                    ? "Update"
                    : "Create"
            }
        >
            <Formik
                initialValues={activeTable ?? defaultValues}
                onSubmit={
                    activeTable
                        ? onEditTable
                        : onCreateTable
                }
                validationSchema={Yup.object({
                    number: Yup.string()
                        .required("Required")
                        .matches(/^[0-9]+$/, "Must be only digits"),

                    customers: Yup.number()
                        .required("Required")
                        .moreThan(0, "Must be greater than 0")
                })}
            >
                {
                    ({}) => (
                        <Form className="flex flex-col gap-2">

                            <ModalField name="number" type="text" />
                            <ErrorMessage name="number" component="div" className="font-bold text-red-500" />

                            <ModalField name="customers" type="number" />
                            <ErrorMessage name="customers" component="div" className="font-bold text-red-500" />

                            <button
                                type="submit"
                                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
                            >
                                {
                                    activeTable
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
