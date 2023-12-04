import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nftSocialMetrics: [],
    nftSocialMetricsLoading: false,
    nftStats: [],
    nftStatsLoading: true,
    nftDescribe: [],
    nftDescribeLoading: true,
    nftChart: [],
    nftChartLoading: true,
    nftChartOffset: 0
}

const nftPageData = createSlice({
    name: 'nft',
    initialState,
    reducers: {
        nftSocialMetricsFetched: (state, action) =>{
            state.nftSocialMetrics = action.payload
            state.nftSocialMetricsLoading = false
        },
        nftSocialMetricsFetching: (state) =>{
            state.nftSocialMetricsLoading = true
        },
        nftStatsFetched: (state, action) =>{
            state.nftStats = action.payload
            state.nftStatsLoading = false
        },
        nftStatsFetching: (state) =>{
            state.nftStatsLoading = true
        },
        nftDescribeFetched: (state, action) =>{
            state.nftDescribe = action.payload
            state.nftDescribeLoading = false
        },
        nftDescribeFetching: (state) =>{
            state.nftDescribeLoading = true
        },
        nftChartFetched: (state, action) =>{
            state.nftChart = action.payload
            state.nftChartLoading = false
        },
        nftChartFetching: (state) =>{
            state.nftChartLoading = true
        },
    }
})

const {actions, reducer} = nftPageData

export default reducer

export const { nftSocialMetricsFetched, 
    nftSocialMetricsFetching,
    nftStatsFetched,
    nftStatsFetching,
    nftDescribeFetched,
    nftDescribeFetching,
    nftChartFetched,
    nftChartFetching,
} = actions