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
        dispatch({type: 'SET_IN_PROGRESS', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};

export const getPastOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get('http://ecommerce.iottelnet.com/api/transaction?status=CANCELLED', {
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

export const getConfirmation = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(
        'http://ecommerce.iottelnet.com/api/transaction?status=ON_DELIVERY',
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
