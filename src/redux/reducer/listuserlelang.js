const initListUserLelang = {
    dataUserLelang : []
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

    return state;
}