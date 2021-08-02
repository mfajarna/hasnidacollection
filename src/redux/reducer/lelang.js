const initLelang = {
    dataLelang: [],
    dataUser: []
}

export const lelangReducer = (state = initLelang, action) => {
    if(action.type === "SET_LELANG")
    {
        return {
            ...state,
            dataLelang : action.value
        }
    }
    if(action.type === "SET_EDIT_PROFILE")
    {
        return {
            ...state,
            dataUser : action.value
        }
    }
    return state;
}