import {useAppDispatch, useAppSelector} from "../store";
import {selectUserState, setUserStates} from "../store/belgsoft/admin/authorization/UserStateSlice.ts";
import {belgsoftApi} from "../api";
import {UserState} from "../belgSoft/admin/interfaces/UserState.ts";

export const useUserStateStore = () => {

    const dispatch = useAppDispatch();
    const {userStates} = useAppSelector(selectUserState);

    const startLoadingUserStates = async () => {

        const response = await belgsoftApi.get('/userState');

        const userStates = response.data;

        const userStatesMapped: UserState[] = userStates.map(({userStateId, name, state}: any) => ({
                id: userStateId,
                name,
                state,
            }
        ));

        dispatch(setUserStates(userStatesMapped));
    }

    return {
        // Properties
        userStates,

        // Methods
        startLoadingUserStates,
    }
}
