const initTukarBarang = {
    dataTukarBarang: [],
    dataKonfirmasi: [],
    dataBarang: [],
    dataDikirimPembeli: [],
    dataKonfirmasiAdmin: [],
    dataDikirimAdmin: [],
    dataDiterimaPembeli: []
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
    if(action.type === "SET_DIKIRIM_PEMBELI")
    {
        return {
            ...state,
            dataDikirimPembeli: action.value
        }
    }
    if(action.type === "SET_KONFIRMASI_ADMIN")
    {
        return {
            ...state,
            dataKonfirmasiAdmin: action.value
        }
    }
    if(action.type === "SET_DIKIRIM_ADMIN")
    {
        return {
            ...state,
            dataDikirimAdmin: action.value
        }
    }
    if(action.type === "SET_DITERIIMA_PEMBELI")
    {
        return {
            ...state,
            dataDiterimaPembeli: action.value
        }
    }




    return state;
}