const initCategory = {
    hijab : [],
    newHijab : [],
    tas : [],
    newTas: [],
    beauty: [],
    newBeauty: [],

    popular : [],
    recommended : [],


}

export const categoryReducer = (state = initCategory, action) => {
    if(action.type === 'SET_HIJAB')
    {
        return {
            ...state,
            hijab: action.value
        }
    }
    
    if(action.type === 'SET_NEW_HIJAB')
    {
        return {
            ...state,
            newHijab: action.value
        }
    }
    if(action.type === 'SET_POPULAR_HIJAB')
    {
        return {
            ...state,
            popular: action.value
        }
    }
    if(action.type === 'SET_RECOMMENDED_HIJAB')
    {
        return {
            ...state,
            recommended: action.value
        }
    }

       if(action.type === 'SET_TAS')
    {
        return {
            ...state,
            tas: action.value
        }
    }
    
    if(action.type === 'SET_NEW_TAS')
    {
        return {
            ...state,
            newTas: action.value
        }
    }
    if(action.type === 'SET_POPULAR_TAS')
    {
        return {
            ...state,
            popular: action.value
        }
    }
    if(action.type === 'SET_RECOMMENDED_HIJAB')
    {
        return {
            ...state,
            recommended: action.value
        }
    }

    if(action.type === 'SET_BEAUTY')
    {
        return {
            ...state,
            beauty: action.value
        }
    }
    
    if(action.type === 'SET_NEW_BEAUTY')
    {
        return {
            ...state,
            newBeauty: action.value
        }
    }
    if(action.type === 'SET_POPULAR_BEAUTY')
    {
        return {
            ...state,
            popular: action.value
        }
    }
    if(action.type === 'SET_RECOMMENDED_BEAUTY')
    {
        return {
            ...state,
            recommended: action.value
        }
    }
    return state
}