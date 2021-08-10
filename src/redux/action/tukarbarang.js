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

export const getBarang = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/statusTukar`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_BARANG", value: res.data.data.data})
            console.log('status tukar',res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}

export const getDikirimPembeli = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/fetchBarang?status=DIKIRIM_PEMBELI`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_DIKIRIM_PEMBELI", value: res.data.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}

export const getKonfirmasiAdmin = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/fetchBarang?status=KONFIRMASI_ADMIN`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_KONFIRMASI_ADMIN", value: res.data.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}

export const getDikirimAdmin = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/fetchBarang?status=DIKIRIM_ADMIN`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_DIKIRIM_ADMIN", value: res.data.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}

export const getDataDiterimaPembeli = () => dispatch => {
    getData('token').then(res => {
        axios.get(`${API_HOST.url}/fetchBarang?status=DITERIMA_PEMBELI`, {
            headers: {
                Authorization: res.value
            }
        }).then(res => {
            dispatch({type : "SET_DITERIIMA_PEMBELI", value: res.data.data.data})
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    })
}


