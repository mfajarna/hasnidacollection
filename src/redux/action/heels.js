import axios from "axios"

export const getHeelsData = () => (dispatch) => {
    axios.get('http://ecommerce.iottelnet.com/api/collection?category=HEELS')
    .then(res => {
        dispatch({type: 'SET_HEELS', value: res.data.data.data})
    }).catch(err => {
        console.log(err)
    })
}

export const getHeelsDataByTypes = (types) => (dispatch) => {
    axios.get(`http://ecommerce.iottelnet.com/api/collection?category=HEELS&types=${types}`)
    .then(res => {
        if(types === 'New Collection')
        {
            dispatch({type: 'SET_NEW_HEELS', value: res.data.data.data})
        } if(types === 'Popular')
        {
            dispatch({type: 'SET_POPULAR', value: res.data.data.data})
        }   if(types === 'Recommended')
        {
            dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data})
        }
    }).catch(err => {
        console.log(err)
    })
}