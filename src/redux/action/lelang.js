import axios from "axios";
import { API_HOST, getData } from "../../utils";

export const getDataLelang = () => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/fetchLelang?status=ON_PROGRESS`,{
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: "SET_LELANG", value: res.data.data.data});
            console.log(res)
        }).catch(err => {
            console.log(err.message);
        })
    })
}

export const getDataPemenangLelang = (status) => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang?status=${status}`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_PEMENANG', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}

export const getDataKonfirmasi = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang?status=KONFIRMASI`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_KONFIRMASI', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}

export const getDataDelivery = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang?status=ON_DELIVERY`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_DELIVERY', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}

export const getDataDone = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`http://27.112.78.10/api/pemenang-lelang?status=DONE`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: 'SET_DONE', value: res.data.data.data})
            console.log(res)
        }).catch(err =>{
            console.log(err.message)
        })
    })
}