import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    upcomingNft: [],
    upcomingNftOffset: 10,
    upcomingNftButton: false
}

const upcomingNft = createSlice({
    name: 'upcomingNftt',
    initialState,
    reducers: {
        upcomingNftFetched: (state, action) =>{
            action.payload.map(item => state.upcomingNft.push(item))
            state.upcomingNftOffset += 10
            state.upcomingNftButton = false
        },
        newOffsetUpcomingNftPage: (state) =>{
            state.upcomingNftOffset = 0
        },
        upcomingNftButtonClick: (state) =>{
            state.upcomingNftButton = true
        },
    }

})

const {actions, reducer} = upcomingNft


export default reducer

export const { upcomingNftFetched, upcomingNftButtonClick } = actions