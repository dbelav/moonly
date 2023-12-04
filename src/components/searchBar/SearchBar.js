import SearchBarItem from "./searchBarItem/SearchBarItem";


import "./searchBar.scss";

const SearchBar = ({searchCollections}) => {

    const renderSearchItems = (searchCollections) => {

        if(searchCollections.length === 0 ) {
            return 
        }

        return (
            <div className="searchBar" >
                {searchCollections.items.map((item) => {
                    return <SearchBarItem data={item} key={item.symbol}/>            
                })}
            </div>
        )
    }

    const render = renderSearchItems(searchCollections)

    return (
        <>
        {render}  

        </> 
    );
};

export default SearchBar;
