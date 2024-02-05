import NftRightContainerItem from './nftRightContainerItem/NftRightContainerItem'
import { useCheckData } from '../../hooks/useCheckData'

import './nftRightContainer.scss'


const NftRightContainer = ({nftStats}) =>{

    const checkData = useCheckData

    const normalizeData = (data, time) =>{

        const smt = {
            volume: data.results['volume' + time],
            txns: data.results['txns' + time],
            avgPrice: data.results['avgPrice' + time],
            deltaFloor: checkData(data.results['deltaFloor' + time])
        }

        return {
            volume: smt.volume === 'N/A' ? 'N/A' : (smt.volume / 1e12).toFixed(2) + 'K',
            txns: smt.txns,
            avgPrice: smt.avgPrice === 'N/A' ? 'N/A' : (smt.avgPrice / 1e9).toFixed(2),
            deltaFloor: smt.deltaFloor === 'N/A' ? 'N/A' : (smt.deltaFloor / 1e7).toFixed(2)
        }     
    };

    const data24H = normalizeData(nftStats, '24hr')

    const data7d = normalizeData(nftStats, '7d')

    const data30d = normalizeData(nftStats, '30d')

    return(
        <div className='nftRightContainer'>
            <h2>Trippin Ape statistics</h2>

            <div className='nftRightContainerStats'>
                <div className='nftRightContainerStatsItem'>
                    <h3>Highest Offer</h3>
                    <span>{(nftStats.results.highestGlobalOffer / 1e9).toFixed(2)}</span>
                </div>
                <div className='nftRightContainerStatsItem'>
                    <h3>Total Listed Value</h3>
                    <span>{(nftStats.results.listedTotalValue/ 1e9).toFixed(2)}</span>
                </div>
            </div>

            <NftRightContainerItem period='24h' data={data24H}/>
            <NftRightContainerItem period='7d' data={data7d}/>
            <NftRightContainerItem period='30d' data={data30d}/>
         
        </div>
    )
}

export default NftRightContainer