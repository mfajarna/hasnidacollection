import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Headers, ItemValue } from '../../components/molecules'
import ImagePicker from 'react-native-image-picker';
import { API_HOST, getData, showMessage } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { Gap, Button } from '../../components';
import DashedLine from 'react-native-dashed-line';
import axios from 'axios';


const UploadBuktiLelang = ({route,navigation}) => {
    const [photo,setPhoto] = useState('');
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const {uploadPhotoPembayaranReducer} = useSelector(state => state)
    const order = route.params;

    const data = {
        status: 'Sudah Bayar'
    }
    
    useEffect(() =>{
        getData("token").then(res => {
            setToken(res.value)
        })
    },[])

    // const dataJson = JSON.stringify({
    //     "to": `${device_token}`,
    //     "priority": "high",
    //     "soundName": "default",
    //     "notification": {
    //         "title": "Admin Hasnida",
    //         "body": `Ada pesanan baru mohon segera di konfirmasi`
        
    //         }
    //   });

    

    const onSubmit = () => {
        if(uploadPhotoPembayaranReducer.isUploadPhoto)
        {
            const photoForUpload = new FormData();
            photoForUpload.append('file', uploadPhotoPembayaranReducer);

            console.log("photo for upload",photoForUpload)

           axios.all([
            axios.post(`${API_HOST.url}/update-photo-pemenang/${order.id}`, photoForUpload, {
              headers: {
                'Authorization': token,
                'Content-Type':'multipart/form-data',
                },
            }),
            axios.post(`${API_HOST.url}/update-status/${order.id}`, data, {
                headers: {
            'Authorization' : token
                }
            })
           ]).then(axios.spread((resUpload, res) => {
                    order.pembayaranPath = `http://27.112.78.10/storage/${resUpload.data.data[0]}`;
                    showMessage('Berhasil input bukti bayar!', 'success');
                    navigation.navigate('LelangBarang');
           })).catch(resErr => {
                console.log(resErr.message)
            }) 
        } 
    }
    const addPhoto = () =>{
        ImagePicker.launchImageLibrary(
            {
                quality: 1,
                width: 700,
                height: 500
            },
            (response) => {
                console.log('Response', response)

                if(response.didCancel || response.error)
                {
                    showMessage('Anda tidak memilih foto!')
                }else{
                    const source = {uri: response.uri}
                    const dataImage = {
                        uri: response.uri,
                        type: response.type,
                        name: response.fileName
                    };
                    setPhoto(source);
                    dispatch({type: 'SET_UPLOAD_PHOTO', value: dataImage});
                    dispatch({type:'SET_STATUS_UPLOAD', value: true})
                }
            }
        )
    }



    return (
        <View style={styles.page}>
            <Headers title="Upload Bukti Bayar" subTitle="Silahkan upload bukti bayar disini!" onBack={()=> navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.photoContent}>
                    <TouchableOpacity onPress={addPhoto}>
                        <Text style={styles.photoPembayaran}>Add Photo</Text>
                    </TouchableOpacity>
                    {photo ? <Image source={photo} style={styles.photoImage} /> : <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}></Text>
                        </View>}
                </View>
                <View style={styles.dataContent}>
                    <Text style={styles.detailInfo}>Detail Informasi Barang</Text>
                    <Gap height={10} />
                    <ItemValue label="Nama Barang" value={order.collection.name} />
                    <ItemValue label="Harga" type="currency" value={order.collection.price} />
                    <ItemValue label="Jumlah Pemesanan"  value={1} />
                    <DashedLine dashLength={5} dashColor='#373737' />
                    <ItemValue label="Total Pembayaran" type="currency" value={order.lelangdetail.jumlah_bid} />

                </View>
                <View style={styles.button}>
                    <Button text="Upload Bukti Pembayaran" color="#66B49D" textColor="white" onPress={onSubmit}/>
                
                </View>
            </View>

        </View>
    )
}

export default UploadBuktiLelang

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content:{
        marginTop: 20,
        flex:1,
    },
    photoImage:{
    width: 200,
    height: 200,
  },
  photoContent:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      paddingBottom: 40,
  },
  dataContent:{
      flex: 1,
      marginTop: 10,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 15
  },
  detailInfo:{
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginBottom: 8,
    color: '#020202',
  },
  dashed:{
      borderBottomWidth: 0.5,
      borderStyle: 'dashed'
  },
  photoPembayaran: {
      fontSize: 15,
      fontFamily: 'Nunito-SemiBold',
      backgroundColor: '#66B49D',
      color: 'white',
      padding: 8,
      borderRadius: 5,
      marginVertical: 5,
  },
  button:{
      paddingHorizontal: 20,
      backgroundColor: 'white',
      paddingBottom: 10,
  },
})
