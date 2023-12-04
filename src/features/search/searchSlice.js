import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchCollections: [],
    onChangeFormText: '',
    focusForm: false
}

const searchNftCollections = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchCollectionsFetched: (state, action) =>{
            state.searchCollections = action.payload
        },
        onChangeForm: (state, action) =>{   
            state.onChangeFormText = action.payload
        },
        onFocusForm: (state, action) =>{   
            state.focusForm = action.payload
        }
        
    }

})

const {actions, reducer} = searchNftCollections


export default reducer

export const { searchCollectionsFetched, 
    onChangeForm, 
    onFocusForm, 
} = actions