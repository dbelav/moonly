import { Link } from 'react-router-dom'

import './allNftItem.scss'


const AllNftItem = ({data, index}) =>{
    const { name, 
        image, 
        totalVol, 
        vol, 
        collectionSymbol, 
        ownerCount, 
        tokenCount,
        highestGlobalOffer,
        fp,
        txns
    } = data

    return(
        <div  className='allNftItem'>
            <div className='allNftItemIndex'>{index}</div>

            <Link to={collectionSymbol} className='allnftItemNameImage'>
                <img src={image} />
                <div>{name}</div>
            </Link>  
            
            <div className='allNftItemFp'>{fp}</div>
            <div className='allNftItemOffer'>{highestGlobalOffer}</div>
            <div className='allNftItemVolume'>{vol}</div>
            <div className='allNftItemSales'>{txns}</div>
            <div className='allNftItemTotalVolume'>{totalVol}</div>
            <div className='allNftItemOwner'>{ownerCount}</div>
            <div className='allNftItemTokenCount'>{tokenCount}</div>

        </div>
    )
}

export default AllNftItem

