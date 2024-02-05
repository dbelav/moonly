import './nftRightContainerItem.scss'

const NftRightContainerItem = ({period, data}) => {

    return(
        <div className='nftRightContainerStats'>
                <div className='nftRightContainerStatsItem'>
                    <h3>{period} stats</h3>
                </div>
                <div className='nftRightContainerStatsItem'>
                    <h3>Volume</h3>
                    <span>{data.volume}</span>
                </div>
                <div className='nftRightContainerStatsItem'>
                    <h3>Delta</h3>
                    <span>{data.deltaFloor}</span>
                </div>
                <div className='nftRightContainerStatsItem'>
                    <h3>Average Price</h3>
                    <span>{data.avgPrice}</span>
                </div>
                <div className='nftRightContainerStatsItem'>
                    <h3>Sales</h3>
                    <span>{data.txns}</span>
                </div>
            </div>
    )
}

export default NftRightContainerItem