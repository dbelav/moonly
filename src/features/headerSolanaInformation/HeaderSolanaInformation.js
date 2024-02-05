import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { solanaPriceFetched } from './headerSolanaSlice'
import { useHttp } from '../../hooks/http.hook'
import { API_COINCAP } from '../../apiLinks/apiLinks'

import './headerSolanaInformation.scss'


const HeaderSolanaInformation = () => {
    const { solanaPrice } = useSelector((state) => state.solanaPrice)

    const dispatch = useDispatch()

    const { request } = useHttp()

    useEffect(() => {
        async function getData() {
            const data = await request(API_COINCAP)
            dispatch(solanaPriceFetched(data.data.priceUsd.substring(0, 4)))
        }

        getData()
    }, [])

    return (
        <div className="infoSolana">
            <div className="innerBlock">
                <span className="item1">SOL/USD: {solanaPrice}</span>
                <span className="item2">Solana Network: 4700</span>
            </div>
        </div>
    )
}

export default HeaderSolanaInformation
