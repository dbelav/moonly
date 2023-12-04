import { configureStore } from '@reduxjs/toolkit'
import solanaPrice from '../features/headerSolanaInformation/headerSolanaSlice'
import topCollection from '../features/topCollectionsContainer/topCollectionsSlice'
import upcomingNft from '../features/upcomingNft/upcomingNftSlice'
import searchNftCollections from '../features/search/searchSlice'
import allNft from '../features/allNftContainer/allNftSlice'
import nftPageData from '../pages/nft/nftSlice'

const store = configureStore({
    reducer: {
        solanaPrice,
        topCollection,    
        upcomingNft,   
        searchNftCollections,
        allNft,
        nftPageData
    },
})

export default store