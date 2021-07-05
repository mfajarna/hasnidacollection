const initHeels = {
    heels :[],
    newHeels: [],
    popular: [],
    recommended: []
}


export const heelsReducer = (state=initHeels, action) => {
    if(action.type ==='SET_HEELS')
    {
        return{
            ...state,
            heels: action.value
        }
    }
     if(action.type ==='SET_NEW_HEELS')
    {
        return{
            ...state,
            newHeels: action.value
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