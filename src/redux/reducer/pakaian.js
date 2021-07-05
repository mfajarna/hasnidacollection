const initPakaian = {
    pakaian :[],
    newPakaian: [],
    popular: [],
    recommended: []
}


export const pakaianReducer = (state=initPakaian, action) => {
    if(action.type ==='SET_PAKAIAN')
    {
        return{
            ...state,
            pakaian: action.value
        }
    }
     if(action.type ==='SET_NEW_PAKAIAN')
    {
        return{
            ...state,
            newPakaian: action.value
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