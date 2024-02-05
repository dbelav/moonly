import UpcomingNft from '../../features/upcomingNft/UpcomingNft'
import { useDispatch } from 'react-redux'
import { upcomingNftButtonClick } from '../../features/upcomingNft/upcomingNftSlice'

import './upcomingNftPage.scss'


const UpcomingNftPage = () => {
    
    const dispatch = useDispatch()

    return (
        <div className="upcomingNftPage">
            <UpcomingNft />
            <button
                className="upcomingNftPageSeeMore"
                onClick={() => dispatch(upcomingNftButtonClick())}
            >
                See more
            </button>
        </div>
    )
}

export default UpcomingNftPage
