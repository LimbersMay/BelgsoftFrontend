import {
    onShowUserModal, onHideUserModal,
    selectUi,
    useAppDispatch,
    useAppSelector, onShowRoleModal, onHideRoleModal
} from "../store";

export const useUiStore = () => {

    const dispatch = useAppDispatch();
    const { isShowingUserModal, isShowingRoleModal } = useAppSelector(selectUi);

    const showUserModal = () => {
        dispatch(onShowUserModal());
    }

    const showRoleModal = () => {
        dispatch(onShowRoleModal());
    }

    const hideUserModal = () => {
        dispatch(onHideUserModal());
    }

    const hideRoleModal = () => {
        dispatch(onHideRoleModal());
    }

    return {
        // Properties
        isShowingUserModal,
        isShowingRoleModal,

        // Methods
        hideUserModal,
        showUserModal,
        hideRoleModal,
        showRoleModal
    }
}
