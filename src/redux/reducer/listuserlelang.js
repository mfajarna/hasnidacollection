const initListUserLelang = {
    dataUserLelang : [],
    dataLelangTerbesar: []
}

export const listUserLelangReducer = (state = initListUserLelang, action) =>
{
    if(action.type === "SET_USER_LELANG")
    {
        return {
            ...state,
            dataUserLelang: action.value
        }
    }

     if(action.type === "SET_LELANG_TERBESAR")
    {
        return {
            ...state,
            dataLelangTerbesar: action.value
        }
    }
    return state;
}