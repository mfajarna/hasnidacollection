import axios from "axios";
import { API_HOST, getData } from "../../utils";


export const uploadPhotoPembayaranAction = (uploadPhotoPembayaranReducer,order,navigation) => dispatch => {

    // console.log(`${API_HOST.url}/pembayaranPhoto/${order.id}/`);

    if(uploadPhotoPembayaranReducer.isUploadPhoto){
        const photoForUpload = new FormData();
        photoForUpload.append('file', uploadPhotoPembayaranReducer);
        
        getData('token').then(res => {
        axios.post(`${API_HOST.url}/pembayaranPhoto/${order.id}`, photoForUpload, {
              headers: {
                Authorization: res.value,
                'Content-Type': 'multipart/form-data',
              },
        }).then(resUpload => {
            // order.photo_pembayaran_path = `ecommerce.iottelnet.com/storage/${resUpload.data.data[0]}`;
            // navigation.reset({index: 0, routes: [{name: 'Keranjang'}]});

            console.log(resUpload.data.data[0])
        }).catch(resErr => {
            console.log(resErr.message)
        })       
    })
    }else{

    }

    

    
}