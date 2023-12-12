import {deleteArea, setArea, useAppDispatch, useAppSelector} from "../store";
import {onSetActiveArea, selectArea, setAreas, updateArea} from "../store";
import {belgsoftApi} from "../api";
import {Area} from "../belgSoft/admin";

export const useAreaStore = () => {

    const dispatch = useAppDispatch();
    const { areas, activeArea } = useAppSelector(selectArea);

    const setActiveArea = (area: Area | null) => {
        dispatch(onSetActiveArea(area));
    }

    const startLoadingAreas = async () => {
        const response = await belgsoftApi.get('/areas');

        dispatch(setAreas(response.data));
    }

    const startCreatingArea = async (area: Area) => {
        const response = await belgsoftApi.post('/areas', {...area});

        dispatch(setArea(response.data));
    }

    const startUpdatingArea = async (area: Partial<Area>) => {
        await belgsoftApi.put(`/areas/${area.areaId}`, {...area});

        dispatch(updateArea(area))
    }

    const startDeletingArea = async (areaId: string) => {
        await belgsoftApi.delete(`/areas/${areaId}`);

        dispatch(deleteArea(areaId));
    }

    return {
        // Properties
        areas,
        activeArea,


        // Methods
        startLoadingAreas,
        startUpdatingArea,
        startCreatingArea,
        startDeletingArea,
        setActiveArea
    }
}