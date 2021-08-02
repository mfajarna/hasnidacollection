const initGlobalState = {
    isError: false,
    message: 'Error',
    isLoading: false,
    isNotification: false,
}

export const globalReducer = (state=initGlobalState, action) => {

    if(action.type === "SET_ERROR")
    {
        return{
            ...state,
            isError: action.value.isError,
            message: action.value.message
        }
    }
    
    if(action.type === "SET_LOADING")
    {
        return{
            ...state,
            isLoading: action.value,
        }
    }

    if(action.type === "SET_NOTIFICATION")
    {
        return{
            ...state,
            isNotification: action.value,
        }
    }


    return state
}