import axios from "axios";
import { API_HOST, getData } from "../../utils";


export const getListLelangUser = () => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/dataLelang`, {
            headers: { 
                Authorization: resToken.value
            }
        }).then(res => {
            console.log(res)
            dispatch({type: "SET_USER_LELANG", value: res.data.data.data})
        }).catch(err => {
            console.log(err.message);
        })
    })
}