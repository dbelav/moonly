import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allNft: [],
    allNftLoading: false
}

const allNft = createSlice({
    name: 'nft',
    initialState,
    reducers: {
        allCollectionsFetched: (state, action) =>{
            state.allNft = action.payload
            state.allNftLoading = false
        },    
        allCollectionsFetching: (state) =>{
            state.allNftLoading = true
        },  
    }

})

const {actions, reducer} = allNft


export default reducer

export const { allCollectionsFetched, 
    allCollectionsFetching } = actions