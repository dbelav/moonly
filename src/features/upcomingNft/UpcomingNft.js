import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { upcomingNftFetched } from "./upcomingNftSlice";
import { useHttp } from "../../hooks/http.hook";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import UpcomingNftItem from'./upcomingNftItem/UpcomingNftItem'
import { useLocation } from 'react-router-dom';
import { createSelector } from "@reduxjs/toolkit";

import './upcomingNft.scss'

const UpcomingNft = () =>{

    let location = useLocation()

    const upcomingNftPageSelector = createSelector(
        state => state.upcomingNft.upcomingNft,
        upcomingNft =>{
            if(location.pathname === '/'){
                const newUpcomingNft = upcomingNft.slice(0, 10)
                return newUpcomingNft
            } 
            else{
                return upcomingNft
            }
        }
    )

    const upcomingNft = useSelector(upcomingNftPageSelector)
    const { upcomingNftOffset } = useSelector(state => state.upcomingNft)
    const { upcomingNftButton } = useSelector(state => state.upcomingNft)

    const dispatch = useDispatch();

    const { request } = useHttp();

    async function getData(){
        const dataUpcomingNft = await request(`https://api-mainnet.magiceden.dev/v2/launchpad/collections?limit=10&offset=${upcomingNftOffset}`) 
        dispatch(upcomingNftFetched(dataUpcomingNft));  
    }

    useEffect(() => {
        if(upcomingNftButton === true){
            getData()
        }
        if(upcomingNft.length === 0){
            console.log(upcomingNft.length)
            getData()
        }    

    }, [upcomingNftButton]);

    const renderUpcomingNft = (upcomingNft) => {
        return upcomingNft.map((item) => {
            return <UpcomingNftItem data={item} key={item.symbol}/>
        })
    }

    const render = renderUpcomingNft(upcomingNft)

    return(
        <div className='upcomingNft'>
            <div className='upcomingNftTitle'>
                <h2>Last NFT Drops</h2>
            </div>

            <div className='upcomingNftContainer'>
                {render}
            </div>
        </div>
    )
}

export default memo(UpcomingNft)