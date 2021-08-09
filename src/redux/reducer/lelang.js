const initLelang = {
    dataLelang: [],
    dataUser: [],
    dataPemenang: [],
    dataKonfirmasi: [],
    dataDelivery: [],
    dataDone: []
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
    if(action.type === "SET_PEMENANG")
    {
        return {
            ...state,
            dataPemenang : action.value
        }
    }

    if(action.type === "SET_KONFIRMASI")
    {
        return {
            ...state,
            dataKonfirmasi : action.value
        }
    }

    if(action.type === "SET_DELIVERY")
    {
        return {
            ...state,
            dataDelivery : action.value
        }
    }
    if(action.type === "SET_DONE")
    {
        return {
            ...state,
            dataDone : action.value
        }
    }




    return state;

    
    
}