import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetData } from '../../hooks/useGetData'
import NftTopContainer from './nftTopContainer/NftTopContainer'
import NftRightContainer from './nftRightContainer/NftRightContainer'
import { nftSocialMetricsFetched, 
    nftSocialMetricsFetching,
    nftStatsFetched,
    nftStatsFetching,
    nftDescribeFetched,
    nftDescribeFetching,
    nftChartFetched,
    nftChartFetching
} from './nftSlice'

import './nft.scss'

const Nft = () =>{

    let { id } = useParams() 
    console.log(useParams().id)

    const { getDataAsync } = useGetData()

    const { nftChart } = useSelector(state => state.nftPageData)
    const { nftStats } = useSelector(state => state.nftPageData)
    const { nftDescribe } = useSelector(state => state.nftPageData)

    const { nftStatsLoading } = useSelector(state => state.nftPageData)
    const { nftDescribeLoading } = useSelector(state => state.nftPageData)
    const { nftChartLoading } = useSelector(state => state.nftPageData)


    // useEffect(() =>{      
    //     getDataAsync(nftSocialMetricsFetching, 
    //         nftSocialMetricsFetched, 
    //         'https://stats-mainnet.magiceden.io/social_metrics/collection/', 
    //         id)
    // }, [])

    useEffect(() =>{      
        getDataAsync(nftStatsFetching, 
            nftStatsFetched, 
            'https://api-mainnet.magiceden.io/rpc/getCollectionEscrowStats/', 
            id)
    }, [id])

    useEffect(() =>{      
        getDataAsync(nftDescribeFetching, 
            nftDescribeFetched, 
            'https://api-mainnet.magiceden.io/collections/', 
            id)
    }, [id])

    useEffect(() =>{     
            getDataAsync(nftChartFetching, 
                nftChartFetched, 
                'https://api-mainnet.magiceden.io/v2/collections/solana-mainnet/activitiesLite?limit=500&offset=0&skip=0&type=buy,buyNow&symbol=', 
                id)
        
    }, [id])

    const renderTop = nftStatsLoading || nftDescribeLoading  ? null : 
    <NftTopContainer nftStats={nftStats} 
    nftDescribe={nftDescribe} 
    nftChartLoading={nftChartLoading} 
    nftChart={nftChart}/>

    const renderRight = nftStatsLoading ? null : <NftRightContainer nftStats={nftStats}  />

    return(
        <div className='NftContainer'>      
            {renderTop}
            {renderRight}
        </div>
    )
}

export default Nft