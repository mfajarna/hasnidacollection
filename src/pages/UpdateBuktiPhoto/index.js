import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { Headers, ItemValue } from '../../components/molecules'
import ImagePicker from 'react-native-image-picker';
import { API_HOST, getData, showMessage } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {Button } from '../../components';

import axios from 'axios';
const UpdateBuktiPhoto = ({navigation,route}) => {
    
    const [photo,setPhoto] = useState('');
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const {uploadPhotoPembayaranReducer} = useSelector(state => state)
    const{data} = route.params

    console.log(data.data.id)

    useEffect(() =>{
        getData("token").then(res => {
            setToken(res.value)
        })
    },[])

    const onSubmit = () => {
        if(uploadPhotoPembayaranReducer.isUploadPhoto)
        {
            const photoForUpload = new FormData();
            photoForUpload.append('file', uploadPhotoPembayaranReducer);

            console.log("photo for upload",photoForUpload)

            console.log(data.data.id)
            const buktiId = data.data.id;

            axios.post(`${API_HOST.url}/buktiBayar/${buktiId}`, photoForUpload,{
                headers:{
                    Authorization: token,
                    'Content-Type':'multipart/form-data',
                }
            }).then(resData => {
               data.data.buktiBayar = `http://27.112.78.10/storage/${resData.data.data[0]}`;
               showMessage('Berhasil Membuat Pengaduan Tukar Barang', 'success');
               navigation.reset({index: 0, routes:[{name:'TukarBarang'}]})
            }).catch(err => {
                console.log(err.message)
            })
        }
    }

    const addPhoto = () =>{
        ImagePicker.launchImageLibrary(
            {
                quality: 1,
                maxWidth: 250,
                maxHeight: 250
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
            <Headers title="Upload Bukti Tukar Barang" subTitle="Silahkan upload bukti pengaduan disini!" />
            <View style={styles.content}>
                <View style={styles.photoContent}>
                    <TouchableOpacity onPress={addPhoto}>
                        <Text style={styles.photoPembayaran}>Add Photo</Text>
                    </TouchableOpacity>
                    {photo ? <Image source={photo} style={styles.photoImage} /> : <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}></Text>
                        </View>}
                </View>
                <View style={styles.button}>
                    <Button text="Upload Bukti Tukar Barang" color="#66B49D" textColor="white" onPress={onSubmit}/>
                
                </View>
            </View>

        </View>
    )
}

export default UpdateBuktiPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content:{
        marginTop: 20,
        flex:1,
    },
    photoImage:{
        width: 300,
        height: 300,
        borderRadius: 10,
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
