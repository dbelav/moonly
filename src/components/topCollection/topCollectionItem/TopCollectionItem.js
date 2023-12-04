import { Link } from 'react-router-dom'

import './topCollectionItem.scss'

const TopCollectionItem = ({data}) =>{

    const {name, image, floorPrice, volumeAll, symbol} = data
    return(
        <div className='topCollectionItem'>
            
            <Link to={`/nfts/${symbol}`} className='itemNameImageContainer'>
                <div className='itemImage'>
                    <img src={image}/>
                </div>
                <div className='itemName'>{name}</div>
            </Link>
            <div className='itemFloorVolumeContainer'>
                <div className='itemFloor'>{floorPrice.toFixed(2)} sol</div>
                <div className='itemVolume'>vol. {volumeAll}</div>
            </div>
        </div>
    )
} 

export default TopCollectionItem