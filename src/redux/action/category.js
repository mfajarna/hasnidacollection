import axios from "axios"

export const getHijabData = () => (dispatch) => {
    axios.get('http://ecommerce.iottelnet.com/api/collection?category=HIJAB')
    .then(res => {
        dispatch({type: 'SET_HIJAB', value: res.data.data.data})
    }).catch(err => {
        console.log(err)
    })
}

export const getHijabDataByTypes = (types) => (dispatch) => {
    axios.get(`http://ecommerce.iottelnet.com/api/collection?category=HIJAB&types=${types}`)
    .then(res => {
        if(types === 'New Collection')
        {
            dispatch({type: 'SET_NEW_HIJAB', value: res.data.data.data})
        } if(types === 'Popular')
        {
            dispatch({type: 'SET_POPULAR_HIJAB', value: res.data.data.data})
        }   if(types === 'Recommended')
        {
            dispatch({type: 'SET_RECOMMENDED_HIJAB', value: res.data.data.data})
        }
    }).catch(err => {
        console.log(err)
    })
}

export const getTasDataByTypes = (types) => (dispatch) => {
    axios.get(`http://ecommerce.iottelnet.com/api/collection?category=TAS&types=${types}`)
    .then(res => {
        if(types === 'New Collection')
        {
            dispatch({type: 'SET_NEW_TAS', value: res.data.data.data})
        } if(types === 'Popular')
        {
            dispatch({type: 'SET_POPULAR_TAS', value: res.data.data.data})
        }   if(types === 'Recommended')
        {
            dispatch({type: 'SET_RECOMMENDED_TAS', value: res.data.data.data})
        }
    }).catch(err => {
        console.log(err)
    })
}
export const getBeautyDataByTypes = (types) => (dispatch) => {
    axios.get(`http://ecommerce.iottelnet.com/api/collection?category=BEAUTY&types=${types}`)
    .then(res => {
        if(types === 'New Collection')
        {
            dispatch({type: 'SET_NEW_BEAUTY', value: res.data.data.data})
        } if(types === 'Popular')
        {
            dispatch({type: 'SET_POPULAR_BEAUTY', value: res.data.data.data})
        }   if(types === 'Recommended')
        {
            dispatch({type: 'SET_RECOMMENDED_BEAUTY', value: res.data.data.data})
        }
    }).catch(err => {
        console.log(err)
    })
}