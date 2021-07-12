import axios from 'axios';
import {getData} from '../../utils';

export const getOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get('http://ecommerce.iottelnet.com/api/transaction', {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        console.log('get orders: ', res);
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
      .get('http://ecommerce.iottelnet.com/api/transaction?status=PENDING', {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        console.log('get In Progress: ', res);
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
        'http://ecommerce.iottelnet.com/api/transaction?status=CONFIRMATION',
        {
          headers: {
            Authorization: resToken.value,
          },
        },
      )
      .then(res => {
        console.log('get Confirmation Orders: ', res);
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
        'http://ecommerce.iottelnet.com/api/transaction?status=DELIVERED',
        {
          headers: {
            Authorization: resToken.value,
          },
        },
      )
      .then(res => {
        console.log('get Confirmation Orders: ', res);
        dispatch({type: 'SET_DELIVERY', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};

export const getDone = () => dispatch => {
  getData('token').then(resToken => {
    axios.get('http://ecommerce.iottelnet.com/api/transaction?status=DONE', {
      headers: {
        Authorization: resToken.value
      },
    }).then(res => {
      console.log('Get Done Project: ', res);
      dispatch({type: 'SET_DONE', value: res.data.data.data})
    }).catch(err => {
      console.log('err', err)
    })
  })
}

export const getPastOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get('http://ecommerce.iottelnet.com/api/pastorders', {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        console.log('get Past Orders: ', res);
        dispatch({type: 'SET_PAST_ORDERS', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};




