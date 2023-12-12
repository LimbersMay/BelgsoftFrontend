import {
    onShowUserModal,
    onHideUserModal,
    selectUi,
    useAppDispatch,
    useAppSelector,
    onShowRoleModal,
    onHideRoleModal,
    onShowTableModal,
    onHideTableModal,
    onShowAreaModal,
    onHideAreaModal, onShowMenuModal, onHideMenuModal
} from "../store";

export const useUiStore = () => {

    const dispatch = useAppDispatch();
    const { isShowingUserModal, isShowingRoleModal, isShowingTableModal, isShowingAreaModal, isShowingMenuModal } = useAppSelector(selectUi);

    const showUserModal = () => {
        dispatch(onShowUserModal());
    }

    const showRoleModal = () => {
        dispatch(onShowRoleModal());
    }

    const showTableModal = () => {
        dispatch(onShowTableModal());
    }

    const showAreaModal = () => {
        dispatch(onShowAreaModal())
    }

    const showMenuModal = () => {
        dispatch(onShowMenuModal());
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

    const hideAreaModal = () => {
        dispatch(onHideAreaModal())
    }

    const hideMenuModal = () => {
        dispatch(onHideMenuModal());
    }

    return {
        // Properties
        isShowingUserModal,
        isShowingRoleModal,
        isShowingTableModal,
        isShowingAreaModal,
        isShowingMenuModal,

        // Methods
        hideUserModal,
        showUserModal,
        hideRoleModal,
        showRoleModal,
        showTableModal,
        hideTableModal,
        showAreaModal,
        hideAreaModal,
        showMenuModal,
        hideMenuModal,
    }
}
