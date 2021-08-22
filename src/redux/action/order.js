import axios from 'axios';
import {API_HOST, getData} from '../../utils';

export const getOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(`${API_HOST.url}/transaction`, {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};

export const getInProgress = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(`${API_HOST.url}/transaction?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        dispatch({type: 'SET_PROCESS', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};

export const getConfirmation = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(
        `${API_HOST.url}/transaction?status=CONFIRMATION`,
        {
          headers: {
            Authorization: resToken.value,
          },
        },
      )
      .then(res => {
        dispatch({type: 'SET_CONFIRMATION', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};


export const getDelivery = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(
        `${API_HOST.url}/transaction?status=ON_DELIVERY`,
        {
          headers: {
            Authorization: resToken.value,
          },
        },
      )
      .then(res => {
        dispatch({type: 'SET_DELIVERY', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};

export const getDone = () => dispatch => {
  getData('token').then(resToken => {
    axios.get(`${API_HOST.url}/transaction?status=DONE`, {
      headers: {
        Authorization: resToken.value
      },
    }).then(res => {
      dispatch({type: 'SET_DONE', value: res.data.data.data})
    }).catch(err => {
      console.log('err', err)
    })
  })
}

export const getPastOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(`${API_HOST.url}/pastorders`, {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        dispatch({type: 'SET_PAST_ORDERS', value: res.data.data.data});
        console.log(res)
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};


export const dataPerhitungan =  (id_koleksi) => dispatch => {
         getData('token').then(resToken => {
            axios.get(`${API_HOST.url}/collection?id=${id_koleksi}`,{
                headers: {
                    Authorization: resToken.value
                }
            }).then(res => {
                dispatch({type: 'SET_PERHITUNGAN_AKHIR', value: res.data.data});
                console.log('API PERHITUNGAN AKHIR',res)
            })
        }).catch(err =>{
            console.log('err', err.message)
        })
    }



