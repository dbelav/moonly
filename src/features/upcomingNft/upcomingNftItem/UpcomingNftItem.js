import useRegex from '../../../hooks/useRegex'

import './upcomingNftItem.scss'


const UpcomingNftItem = ({ data }) => {

    const { name, launchDatetime, image, size, price } = data

    return (
        <div className="upcomingNftItem">
            <div className="upcomingNftItemFirstContainer">
                <div className="upcomingNftItemImage">
                    <img src={image} />
                </div>
                <div className="upcomingNftItemName">{name}</div>
            </div>
            <div className="upcomingNftItemSecondContainer">
                <div className="upcomingNftItemPrice">
                    <span className="upcomingNftItemSecondContainerTitle">
                        Price
                    </span>
                    <span>{price} sol</span>
                </div>
                <div className="upcomingNftItemSupply">
                    <span className="upcomingNftItemSecondContainerTitle">
                        Supply
                    </span>
                    <span>{size}</span>
                </div>
                <div className="upcomingNftItemDate">
                    <span className="upcomingNftItemSecondContainerTitle">
                        Mint Date
                    </span>
                    <span>{useRegex(launchDatetime)}</span>
                </div>
            </div>
        </div>
    )
}

export default UpcomingNftItem
