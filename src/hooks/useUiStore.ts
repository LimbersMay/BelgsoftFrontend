import {
    onShowUserModal, onHideUserModal,
    selectUi,
    useAppDispatch,
    useAppSelector, onShowRoleModal, onHideRoleModal, onShowTableModal, onHideTableModal
} from "../store";

export const useUiStore = () => {

    const dispatch = useAppDispatch();
    const { isShowingUserModal, isShowingRoleModal, isShowingTableModal } = useAppSelector(selectUi);

    const showUserModal = () => {
        dispatch(onShowUserModal());
    }

    const showRoleModal = () => {
        dispatch(onShowRoleModal());
    }

    const showTableModal = () => {
        dispatch(onShowTableModal());
    }

    const hideUserModal = () => {
        dispatch(onHideUserModal());
    }

    const hideRoleModal = () => {
        dispatch(onHideRoleModal());
    }

    const hideTableModal = () => {
        dispatch(onHideTableModal());
    }

    return {
        // Properties
        isShowingUserModal,
        isShowingRoleModal,
        isShowingTableModal,

        // Methods
        hideUserModal,
        showUserModal,
        hideRoleModal,
        showRoleModal,
        showTableModal,
        hideTableModal,
    }
}
