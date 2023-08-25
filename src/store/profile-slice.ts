import { createSlice } from "@reduxjs/toolkit";

export interface Profile {
    name: string;
    email: string;
    age: string;
    gender: string;
}

const initialState:Array<Profile> = []

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addNewProfile(state, action) {
            const newItem = action.payload
            const exisitingProfile = state.find((profile) => profile.email === newItem.email )
            if (!exisitingProfile) {
                state.push({
                    ...newItem
                })
            }
            
        }
    }
})

export const profileAction = profileSlice.actions;

export default profileSlice