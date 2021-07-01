const initHome = {
    collection :[],
    newCollection: [],
    popular: [],
    recommended: []
}

export const homeReducer = (state=initHome, action) => {
    if(action.type ==='SET_COLLECTION')
    {
        return{
            ...state,
            collection: action.value
        }
    }
     if(action.type ==='SET_NEW_COLLECTION')
    {
        return{
            ...state,
            newCollection: action.value
        }
    }
     if(action.type ==='SET_POPULAR')
    {
        return{
            ...state,
            popular: action.value
        }
    }
     if(action.type ==='SET_RECOMMENDED')
    {
        return{
            ...state,
            recommended: action.value
        }
    }

    return state
}