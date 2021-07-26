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
        }).catch(err => {
            console.log(err.message);
        })
    })
}