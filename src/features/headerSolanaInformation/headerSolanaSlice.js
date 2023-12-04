import { useHttp } from "../../hooks/http.hook";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    solanaPrice: null
}

const solanaPrice = createSlice({
    name: 'solanaHeaderPrice',
    initialState,
    reducers: {
        solanaPriceFetched: (state, action) =>{
            state.solanaPrice = action.payload
        }
    }

})

const {actions, reducer} = solanaPrice


export default reducer

export const { solanaPriceFetched } = actions