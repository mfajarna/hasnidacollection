const initOrder = {
  orders: [],
  inProgress: [],
  pastOrders: [],
  confirmation: [],
  delivery: []
};

export const orderReducer = (state = initOrder, action) => {
  if (action.type === 'SET_ORDER') {
    return {
      ...state,
      orders: action.value,
    };
  }

  if (action.type === 'SET_IN_PROGRESS') {
    return {
      ...state,
      inProgress: action.value,
    };
  }

  if (action.type === 'SET_CONFIRMATION') {
    return {
      ...state,
      confirmation: action.value,
    };
  }

  if (action.type === 'SET_PAST_ORDERS') {
    return {
      ...state,
      pastOrders: action.value,
    };
  }

    if (action.type === 'SET_DELIVERY') {
    return {
      ...state,
      delivery: action.value,
    };
  }

  return state;
};
