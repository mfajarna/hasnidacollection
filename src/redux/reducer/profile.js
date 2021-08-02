const initProfile = {
    dataProfile: []
}

export const profileReducer = (state = initProfile, action) => {
    if(action.type === "SET_PROFILE")
    {
        return {
            ...state,
            dataProfile : action.value
        }
    }

    return state;
}