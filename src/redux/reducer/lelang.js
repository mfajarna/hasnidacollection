const initLelang = {
    dataLelang: []
}

export const lelangReducer = (state = initLelang, action) => {
    if(action.type === "SET_LELANG")
    {
        return {
            ...state,
            dataLelang : action.value
        }
    }

    return state;
}