import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";

interface initialState {
    areas: Area[];
    activeArea: Area | null;
}

const initialState: initialState = {
    areas: [],
    activeArea: null
}

export const areasSlice = createSlice({
    name: 'areas',
    initialState: initialState,
    reducers: {
        setAreas: (state, action: PayloadAction<Area[]>) => {
            state.areas = action.payload;
        },
        setArea: (state, action: PayloadAction<Area>) => {
            state.areas.push(action.payload)
        },
        onSetActiveArea: (state, action: PayloadAction<Area | null>) => {
            state.activeArea = action.payload;
        },
        updateArea: (state, action: PayloadAction<Partial<Area>>) => {
            const index = state.areas.findIndex(area => area.areaId === action.payload.areaId);

            state.areas[index] = {
                ...state.areas[index],
                ...action.payload
            };
        },
        deleteArea: (state, action: PayloadAction<string>) => {
            state.areas = state.areas.filter(area => area.areaId !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setAreas,
    setArea,
    onSetActiveArea,
    updateArea,
    deleteArea
} = areasSlice.actions;

export const selectArea = (state: RootState) => state.area;
