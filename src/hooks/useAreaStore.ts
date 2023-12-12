import {useAppDispatch, useAppSelector} from "../store";
import {onSetActiveArea, selectArea, setAreas, updateArea} from "../store/belgsoft/admin/areasSlice.ts";
import {belgsoftApi} from "../api";

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

    const startCreatingArea = async (area: Partial<Area>) => {
        console.log(area)
    }

    const startUpdatingArea = async (area: Partial<Area>) => {
        await belgsoftApi.put(`/areas/${area.areaId}`, {...area});

        dispatch(updateArea(area))
    }

    const startDeletingArea = async (areaId: string) => {
        console.log(areaId);
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