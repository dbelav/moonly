import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetData } from '../../hooks/useGetData'
import { API_MAINNET_IO } from '../../apiLinks/apiLinks'
import NftTopContainer from '../../features/nftTopContainer/NftTopContainer'
import NftRightContainer from '../../features/nftRightContainer/NftRightContainer'
import {
    nftStatsFetched,
    nftStatsFetching,
    nftDescribeFetched,
    nftDescribeFetching,
    nftChartFetched,
    nftChartFetching,
} from './nftSlice'

import './nft.scss'


const Nft = () => {
    
    let { id } = useParams()

    const { getDataAsync } = useGetData()

    const { nftChart } = useSelector((state) => state.nftPageData)
    const { nftStats } = useSelector((state) => state.nftPageData)
    const { nftDescribe } = useSelector((state) => state.nftPageData)

    const { nftStatsLoading } = useSelector((state) => state.nftPageData)
    const { nftDescribeLoading } = useSelector((state) => state.nftPageData)
    const { nftChartLoading } = useSelector((state) => state.nftPageData)

    useEffect(() => {
        getDataAsync(
            nftStatsFetching,
            nftStatsFetched,
            `${API_MAINNET_IO}/rpc/getCollectionEscrowStats/`,
            id
        )
    }, [id])

    useEffect(() => {
        getDataAsync(
            nftDescribeFetching,
            nftDescribeFetched,
            `${API_MAINNET_IO}/collections/`,
            id
        )
    }, [id])

    useEffect(() => {
        getDataAsync(
            nftChartFetching,
            nftChartFetched,
            `${API_MAINNET_IO}/v2/collections/solana-mainnet/activitiesLite?limit=500&offset=0&skip=0&type=buy,buyNow&symbol=`,
            id
        )
    }, [id])

    const renderTop =
        nftStatsLoading || nftDescribeLoading ? null : (
            <NftTopContainer
                nftStats={nftStats}
                nftDescribe={nftDescribe}
                nftChartLoading={nftChartLoading}
                nftChart={nftChart}
            />
        )

    const renderRight = nftStatsLoading ? null : (
        <NftRightContainer nftStats={nftStats} />
    )

    return (
        <div className="NftContainer">
            {renderTop}
            {renderRight}
        </div>
    )
}

export default Nft
