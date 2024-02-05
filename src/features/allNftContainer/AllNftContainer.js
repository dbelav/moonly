import AllNftItem from './allNftItem/AllNftItem'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { allCollectionsFetched, allCollectionsFetching } from './allNftSlice'
import { useGetData } from '../../hooks/useGetData'
import { API_STATS_MAINNET } from '../../apiLinks/apiLinks'

import './allNftContainer.scss'


const AllNftContainer = () => {
    const { getDataAsync } = useGetData()

    const { allNft } = useSelector((state) => state.allNft)
    const { allNftLoading } = useSelector((state) => state.allNft)

    const normalizeAllNftData = (data) => {
        return data.map((item) => {
            return {
                ...item,
                fp: (item.fp / 1000000000).toFixed(2),
                totalVol: (item.totalVol / 1000).toFixed(1) + 'K',
                vol: (item.vol / 1000).toFixed(1) + 'K',
                highestGlobalOffer: (
                    item.highestGlobalOffer / 1000000000
                ).toFixed(2),
            }
        })
    }

    useEffect(() => {
        getDataAsync(
            allCollectionsFetching,
            allCollectionsFetched,
            `${API_STATS_MAINNET}/collection_stats/popular_collections/sol?limit=20&window=7d&compressionMode=regular`,
            '',
            normalizeAllNftData
        )
    }, [])

    const renderAllNft = (allNft) => {
        if (allNftLoading) {
            return (
                <Skeleton
                    className="topCollectionSkeleton"
                    count={20}
                    baseColor="#202020"
                    highlightColor="#444"
                    height={40}
                />
            )
        }
        return allNft.map((item, index) => {
            return (
                <AllNftItem data={item} key={item.symbol} index={index + 1} />
            )
        })
    }

    const render = allNft ? renderAllNft(allNft) : null

    return (
        <div className="allNftContainer">
            <div className="allNftInnerContainer">
                <div className="allNftInnerContainerInfo">
                    <div className="allNftInnerContainerInfoIndex">#</div>
                    <div className="allNftInnerContainerInfoName">Name</div>
                    <div className="allNftInnerContainerInfoFloor">Floor</div>
                    <div className="allNftInnerContainerInfoOffer">Offer</div>
                    <div className="allNftInnerContainerInfo7Vol">7d Vol</div>
                    <div className="allNftInnerContainerInfoSales">Sales</div>
                    <div className="allNftInnerContainerInfoTotalVolume">
                        Total Vol
                    </div>
                    <div className="allNftInnerContainerInfoOwners">Owners</div>
                    <div className="allNftInnerContainerInfoSupply">Supply</div>
                </div>

                {render}
            </div>
        </div>
    )
}

export default AllNftContainer
