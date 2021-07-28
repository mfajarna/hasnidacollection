const initTukarBarang = {
    dataTukarBarang: [],
    dataKonfirmasi: [],
    dataBarang: []
}

export const tukarBarangReducer = (state = initTukarBarang, action) => {
    if(action.type === "SET_TUKAR_BARANG")
    {
        return {
            ...state,
            dataTukarBarang : action.value
        }
    }
     if(action.type === "SET_KONFIRMASI")
    {
        return {
            ...state,
            dataKonfirmasi : action.value
        }
    }
    if(action.type === "SET_BARANG")
    {
        return {
            ...state,
            dataBarang: action.value
        }
    }

    return state;
}