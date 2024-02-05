import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { API_MAINNET_V2 } from '../../apiLinks/apiLinks'
import {
    topCollections1DayFetched,
    topCollections7DayFetched,
    topCollections30DayFetched,
    topCollections1DayFetching,
    topCollections7DayFetching,
    topCollections30DayFetching,
} from './topCollectionsSlice'
import TopCollection from '../../components/topCollection/TopCollection'
import { useGetData } from '../../hooks/useGetData'

import './topCollectionsContainer.scss'


const TopCollectionsContainer = () => {
    
    const { getDataAsync } = useGetData()

    const { topCollections1Day } = useSelector((state) => state.topCollection)
    const { topCollections7Day } = useSelector((state) => state.topCollection)
    const { topCollections30Day } = useSelector((state) => state.topCollection)

    const { topCollections1DayLoading } = useSelector(
        (state) => state.topCollection
    )
    const { topCollections7DayLoading } = useSelector(
        (state) => state.topCollection
    )
    const { topCollections30DayLoading } = useSelector(
        (state) => state.topCollection
    )

    const normalizeData = (data) => {
        data.splice(3)

        return data.map((item) => {
            return {
                ...item,
                floorPrice: item.floorPrice / 1000000000,
                volumeAll: (item.volumeAll / 1000).toFixed(1) + 'K',
            }
        })
    }

    useEffect(() => {
        getDataAsync(
            topCollections1DayFetching,
            topCollections1DayFetched,
            `${API_MAINNET_V2}/v2/marketplace/popular_collections?timeRange=1d`,
            '',
            normalizeData
        )
    }, [])

    useEffect(() => {
        getDataAsync(
            topCollections7DayFetching,
            topCollections7DayFetched,
            `${API_MAINNET_V2}/v2/marketplace/popular_collections?timeRange=7d`,
            '',
            normalizeData
        )
    }, [])

    useEffect(() => {
        getDataAsync(
            topCollections30DayFetching,
            topCollections30DayFetched,
            `${API_MAINNET_V2}/v2/marketplace/popular_collections?timeRange=30d`,
            '',
            normalizeData
        )
    }, [])

    return (
        <div className="topCollectionContainer">
            <TopCollection
                topListCollections={topCollections1Day}
                loading={topCollections1DayLoading}
                term="day"
            />
            <TopCollection
                topListCollections={topCollections7Day}
                loading={topCollections7DayLoading}
                term="week"
            />
            <TopCollection
                topListCollections={topCollections30Day}
                loading={topCollections30DayLoading}
                term="30 days"
            />
        </div>
    )
}

export default TopCollectionsContainer
