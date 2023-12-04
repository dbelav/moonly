import Title from '../../features/title/Title'
import TopCollectionsContainer from '../../features/topCollectionsContainer/TopCollectionsContainer'
import UpcomingNft from '../../features/upcomingNft/UpcomingNft.js'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";

import './mainPage.scss'


const MainPage = () => {

  return (
    <div className='includeComponents'>
        <Title />
        <TopCollectionsContainer />
        <UpcomingNft />
    </div>
  )
}

export default MainPage
