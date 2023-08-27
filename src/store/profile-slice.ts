import { createSlice } from "@reduxjs/toolkit";

export interface Profile {
    name: string;
    email: string;
    age: string;
    gender: string;
}

interface ModelState {
  items: Array<Profile>

}

const initialState:ModelState ={
    items: []
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        replaceProfile(state,action){
            console.log('tstae', state, action.payload)
            state.items = action.payload
          
        },
        addNewProfile(state, action) {
            const newItem = action.payload
            const exisitingProfile = state.items.find((profile) => profile.email === newItem.email )
            if (!exisitingProfile) {
                state.items.push({
                    ...newItem
                })
            }
         
            
        }
    }
})

export const profileAction = profileSlice.actions;

export default profileSlice