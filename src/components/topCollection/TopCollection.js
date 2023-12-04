import TopCollectionItem from'./topCollectionItem/TopCollectionItem'
import Spinner from '../../assets/Spinner/Spinner'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import './topCollection.scss'

const TopCollection = ({topListCollections, term, loading}) =>{

    const renderHeroesList = (topListCollections) => {
        if (loading) {
            return  <Skeleton className='topCollectionSkeleton' count={3} baseColor="#202020" highlightColor="#444" height={45}/>
        }
        return topListCollections.map((item) => {
            return <TopCollectionItem data={item} key={item.symbol}/>
        })
    }
    const render = renderHeroesList(topListCollections)
    return(
        <div className='collectionContainer'>
            <div className='titleVolume'>
                <h2>Top collections by volume per {term}</h2>
            </div>
            <div className='collectionsItemsContainer'>

                {render}

            </div>
        </div>
    )
}

export default TopCollection