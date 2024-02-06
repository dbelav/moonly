import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    upcomingNft: [],
    upcomingNftLoading: false,
    upcomingNftOffset: 10,
    upcomingNftButton: false,
}

const upcomingNft = createSlice({
    name: 'upcomingNftt',
    initialState,
    reducers: {
        upcomingNftFetched: (state, action) => {
            action.payload.map((item) => state.upcomingNft.push(item))
            state.upcomingNftOffset += 10
            state.upcomingNftButton = false
            state.upcomingNftLoading = false
        },
        upcomingNftFetching: (state) => {
            state.upcomingNftLoading = true
            
        },
        newOffsetUpcomingNftPage: (state) => {
            state.upcomingNftOffset = 0
        },
        upcomingNftButtonClick: (state) => {
            state.upcomingNftButton = true
        },
    },
})

const { actions, reducer } = upcomingNft

export default reducer

export const {
    upcomingNftFetched,
    upcomingNftButtonClick,
    newOffsetUpcomingNftPage,
    upcomingNftFetching,
} = actions
