import { createSlice } from "@reduxjs/toolkit";

export interface Profile {
    name: string;
    email: string;
    age: string;
    gender: string;
}

interface ModelState {
  items: Array<Profile>
  quantity: number

}

const initialState:ModelState ={
    items: [],
    quantity: 0
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        replaceProfile(state,action){
    
            state.items = action.payload.items
            state.quantity = action.payload.quantity
          
        },
        addNewProfile(state, action) {
            const newItem = action.payload
            const exisitingProfile = state.items.find((profile) => profile.email === newItem.email )
            if (!exisitingProfile) {
                state.items.push({
                    ...newItem
                })
                state.quantity++
            } else {
                state.items = state.items.map(item =>
                  item.email === newItem.email ? newItem : item,
                )
            }
         
            
        }
    }
})

export const profileAction = profileSlice.actions;

export default profileSlice