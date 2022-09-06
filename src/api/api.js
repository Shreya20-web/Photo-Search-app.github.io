import {useEffect, useState} from 'react'
import axios from 'axios'

function LoadImages() {
    const [state, setState] = useState([])
    
    useEffect(() => {

        axios.get(`https://api.unsplash.com/photos?client_id=PNcuaq3ejvWgs-XTOHahVUrZBwGv_6ReEoLjxrnC-ms`)
        .then((data) => {
            setState(data.data);
           
        })
    }, [])

    return state;
}

function SearchImages(query, paginate) {
    const [state, setState] = useState([])
    
    useEffect(() => {

        axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
        .then((data) => {
            setState(data.data.results);
           
        })
    }, [query])

    return state;
}

export {LoadImages, SearchImages}


