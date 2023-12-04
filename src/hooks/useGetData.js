import { useHttp } from './http.hook'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

export const useGetData = () => {

    const { request } = useHttp()
    const dispatch = useDispatch();

    const getDataAsync =  useCallback( async (fetching, fetched, url,  id = null, normalizeData = null) => {

        dispatch(fetching())

        const data = await request(url + id)

        let copiedData = normalizeData ? data : null

        if(normalizeData){
            copiedData = normalizeData([...data])
            dispatch(fetched(copiedData))
        }

        else{
            dispatch(fetched(data))
        }

    }, [])

    return { getDataAsync }
}

