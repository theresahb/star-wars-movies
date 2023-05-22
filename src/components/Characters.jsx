import React, { useEffect, useState } from 'react'
import Loader from './Loader/Loader'

const Characters = ( {url} ) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP Error: The status is ${response.status}`)
                }
                return response.json()
            })
            .then((actualData) => {
                setData(actualData)
                setError(null)
            })
            .catch((error) => {
                console.log(error)
                setError(error)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })

    })
  return (
    <div className='movie-container'>
            {loading && <Loader />}
            {error && <div className='error'>{`There is a problem fetching your data - ${error}`}</div>}
            {data && data.name}
    </div>
  )
}

export default Characters