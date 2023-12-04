import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchCollectionsFetched, 
    onChangeForm, 
    onFocusForm, 
} from './searchSlice';
import { useHttp } from "../../hooks/http.hook";
import SearchBar from "../../components/searchBar/SearchBar";

import "./search.scss";

const Search = () => {
    
    const {searchCollections} = useSelector(state => state.searchNftCollections)
    const {onChangeFormText} = useSelector(state => state.searchNftCollections)
    const {focusForm} = useSelector(state => state.searchNftCollections)

    const dispatch = useDispatch()

    const {request} = useHttp()

    useEffect(() => {
        async function getData(){
            if(onChangeFormText.length !==0){
                const data = await request(`https://api-mainnet.magiceden.dev/v2/unifiedSearch/collection/${onChangeFormText}?chain=SOL`)  
                dispatch(searchCollectionsFetched(data));
            }
            else{
                dispatch(searchCollectionsFetched(''));
            }
        }
        
        getData()
        
    }, [onChangeFormText]);

    function typeForm(e){
        e.preventDefault()
        dispatch(onChangeForm(e.target.value))
    }

    const showModal = focusForm ? <SearchBar searchCollections={searchCollections} /> : null

    return (
        <div className="search">
            <form className="serachForm">
            <input
                required
                name="text"
                className="formControl"
                id="text"
                placeholder="Search for a NFT"
                value={onChangeFormText}
                onChange={typeForm}
                onFocus={() => dispatch(onFocusForm(true))}
                onBlur={() => setTimeout(() => dispatch(onFocusForm(false)), 100)}          
            />
            </form>
            {/* <SearchBar searchCollections={searchCollections} /> */}
            {showModal}

        </div>
    );
};

export default Search;
