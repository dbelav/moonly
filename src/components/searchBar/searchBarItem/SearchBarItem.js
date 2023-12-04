import { Link } from 'react-router-dom'

import "./searchBarItem.scss";

const SearchBarItem = ({data}) => {

    const { name, image, symbol } = data

    return (
        <Link Link to={`nfts/${symbol}`} className="searchBarItem">
            <div  className="searchBarItemImage">
                <img src={image} />
            </div>
            <div className="searchBarItemName">{name}</div>

        </Link>
    );
};

export default SearchBarItem;
