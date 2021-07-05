import axios from "axios"

export const getPakaianData = () => (dispatch) => {
    axios.get('http://ecommerce.iottelnet.com/api/collection?category=PAKAIAN')
    .then(res => {
        dispatch({type: 'SET_PAKAIAN', value: res.data.data.data})
    }).catch(err => {
        console.log(err)
    })
}

export const getPakaianDataByTypes = (types) => (dispatch) => {
    axios.get(`http://ecommerce.iottelnet.com/api/collection?category=PAKAIAN&types=${types}`)
    .then(res => {
        if(types === 'New Collection')
        {
            dispatch({type: 'SET_NEW_PAKAIAN', value: res.data.data.data})
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