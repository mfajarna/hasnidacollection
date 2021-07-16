import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Headers, ItemValue } from '../../components/molecules'
import ImagePicker from 'react-native-image-picker';
import { showMessage } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { Gap, Button } from '../../components';
import DashedLine from 'react-native-dashed-line';
import { uploadPhotoPembayaranAction } from '../../redux/action';


const UploadBuktiBayar = ({route,navigation}) => {
    const [photo,setPhoto] = useState('');
    const dispatch = useDispatch();
    const {uploadPhotoPembayaranReducer} = useSelector(state => state)
    const order = route.params;
    console.log('orderdetail: ',order)

    const onSubmit = () => {
        dispatch(uploadPhotoPembayaranAction(uploadPhotoPembayaranReducer,order,navigation))

    }

    const addPhoto = () =>{
        ImagePicker.launchImageLibrary(
            {
                quality: 1,
                maxWidth: 200,
                maxHeight: 200
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
                        name: response.name
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
                    <ItemValue label="Jumlah Pemesanan"  value={order.quantity} />
                    <DashedLine dashLength={5} dashColor='#373737' />
                    <ItemValue label="Total Pembayaran" type="currency" value={order.total} />

                </View>
                <View style={styles.button}>
                    <Button text="Upload Bukti Pembayaran" color="#66B49D" textColor="white" onPress={onSubmit}/>
                
                </View>
            </View>

        </View>
    )
}

export default UploadBuktiBayar

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
