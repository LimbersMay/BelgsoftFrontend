import {
    selectUi,
    useAppDispatch,
    useAppSelector,
    onSetIsShowingUserModal,
    onSetIsShowingRoleModal,
    onSetIsShowingTableModal,
    onSetIsShowingAreaModal,
    onSetIsShowingMenuModal,
    onSetIsShowingOrderModal,
    onSetIsShowingOrderDetailModalToEdit, onSetIsShowingOrderDetailModalToAdd
} from "../store";

export const useUiStore = () => {

    const dispatch = useAppDispatch();
    const {
        isShowingUserModal,
        isShowingRoleModal,
        isShowingTableModal,
        isShowingAreaModal,
        isShowingMenuModal ,
        isShowingOrderModal,
        isShowingOrderDetailModalToEdit,
        isShowingOrderDetailModalToAdd
    } = useAppSelector(selectUi);

    const showUserModal = () => {
        dispatch(onSetIsShowingUserModal(true));
    }

    const showRoleModal = () => {
        dispatch(onSetIsShowingRoleModal(true));
    }

    const showTableModal = () => {
        dispatch(onSetIsShowingTableModal(true));
    }

    const showAreaModal = () => {
        dispatch(onSetIsShowingAreaModal(true));
    }

    const showMenuModal = () => {
        dispatch(onSetIsShowingMenuModal(true));
    }

    const showOrderModal = () => {
        dispatch(onSetIsShowingOrderModal(true));
    }

    const showOrderDetailModalToEdit = () => {
        dispatch(onSetIsShowingOrderDetailModalToEdit(true));
    }

    const showOrderDetailModalToAdd = () => {
        dispatch(onSetIsShowingOrderDetailModalToAdd(true));
    }

    const hideUserModal = () => {
        dispatch(onSetIsShowingUserModal(false));
    }

    const hideRoleModal = () => {
        dispatch(onSetIsShowingRoleModal(false));
    }

    const hideTableModal = () => {
        dispatch(onSetIsShowingTableModal(false));
    }

    const hideAreaModal = () => {
        dispatch(onSetIsShowingAreaModal(false));
    }

    const hideMenuModal = () => {
        dispatch(onSetIsShowingMenuModal(false));
    }

    const hideOrderModal = () => {
        dispatch(onSetIsShowingOrderModal(false));
    }

    const hideOrderDetailModal = () => {
        dispatch(onSetIsShowingOrderDetailModalToAdd(false));
        dispatch(onSetIsShowingOrderDetailModalToEdit(false));
    }

    return {
        // Properties
        isShowingUserModal,
        isShowingRoleModal,
        isShowingTableModal,
        isShowingAreaModal,
        isShowingMenuModal,
        isShowingOrderModal,
        isShowingOrderDetailModalToEdit,
        isShowingOrderDetailModalToAdd,

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
        showOrderModal,
        hideOrderModal,
        showOrderDetailModalToAdd,
        showOrderDetailModalToEdit,
        hideOrderDetailModal,
    }
}
