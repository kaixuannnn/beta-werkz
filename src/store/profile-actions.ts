import { Dispatch } from "react";
import { profileAction } from "./profile-slice";
import { Action } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

export const fetchProfileData = ()=>{
    return async (dispatch: AppDispatch)=>{
    const fetchData = async ()=>{
        const response  = await fetch('seeds/MOCK_DATA.json');
        return response.json()
    }

    try{
        const profileData = await fetchData()
      
        dispatch(
            profileAction.replaceProfile(profileData)
        )
    }catch{
        console.log('errors')
    }
}
}