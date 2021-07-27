import axios from "axios";
import { API_HOST, getData } from "../../utils";


export const getTukarBarang = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/fetchBarang?status=PENDING`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_TUKAR_BARANG", value: res.data.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}

export const getTukarBarangKonfirmasi = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/fetchBarang?status=KONFIRMASI`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_KONFIRMASI", value: res.data.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}