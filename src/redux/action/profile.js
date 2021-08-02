import axios from "axios";
import { API_HOST, getData } from "../../utils";

export const getDataProfile = () => dispatch => {
    getData('token').then(resToken => {
        axios.get(`${API_HOST.url}/user`,{
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
            dispatch({type: "SET_EDIT_PROFILE", value: res.data.data});
        }).catch(err => {
            console.log(err.message);
        })
    })
}