import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const initialState = {
    topCollections1Day: [],
    topCollections1DayLoading: false,
    topCollections7Day: [],
    topCollections7DayLoading: false,
    topCollections30Day: [],
    topCollections30DayLoading: false,
}

const topCollection = createSlice({
    name: 'topCollections',
    initialState,
    reducers: {
        topCollections1DayFetched: (state, action) => {
            state.topCollections1Day = action.payload
            state.topCollections1DayLoading = false
        },
        topCollections7DayFetched: (state, action) => {
            state.topCollections7Day = action.payload
            state.topCollections7DayLoading = false
        },
        topCollections30DayFetched: (state, action) => {
            state.topCollections30Day = action.payload
            state.topCollections30DayLoading = false
        },
        topCollections1DayFetching: (state) => {
            state.topCollections1DayLoading = true
        },
        topCollections7DayFetching: (state) => {
            state.topCollections7DayLoading = true
        },
        topCollections30DayFetching: (state) => {
            state.topCollections30DayLoading = true
        }

    }

})

const {actions, reducer} = topCollection

export default reducer

export const { topCollections1DayFetched,
    topCollections7DayFetched,
    topCollections30DayFetched,
    topCollections1DayFetching,
    topCollections7DayFetching,
    topCollections30DayFetching } = actions