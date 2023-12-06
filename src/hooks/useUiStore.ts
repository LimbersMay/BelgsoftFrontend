import {
    onHideCreatingUserModal, onHideUpdatingUserModal, onShowCreatingUserModal, onShowUpdatingUserModal,
    selectUi,
    useAppDispatch,
    useAppSelector
} from "../store";

export const useUiStore = () => {

    const dispatch = useAppDispatch();
    const { isCreatingUserModalOpen, isUpdatingUserModalOpen } = useAppSelector(selectUi);

    const hideCreatingUserModal = () => {
        dispatch(onHideCreatingUserModal());
    }

    const hideUpdatingUserModal = () => {
        dispatch(onHideUpdatingUserModal());
    }

    const showCreatingUserModal = () => {
        dispatch(onShowCreatingUserModal());
    }

    const showUpdatingUserModal = () => {
        dispatch(onShowUpdatingUserModal());
    }

    return {
        // Properties
        isCreatingUserModalOpen,
        isUpdatingUserModalOpen,

        // Methods
        hideCreatingUserModal,
        hideUpdatingUserModal,
        showCreatingUserModal,
        showUpdatingUserModal
    }
}
