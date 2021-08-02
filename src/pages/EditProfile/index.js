import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { useDispatch, useSelector } from 'react-redux'
import {Headers, TextInput, Gap, Button} from '../../components'
import { getDataLelang, getDataProfile } from '../../redux/action'
import { API_HOST, getData, useForm, showMessage } from '../../utils'


const EditProfile = ({navigation}) => {

    const{dataUser} = useSelector(state => state.lelangReducer)

    const[form,setForm] = useForm({
        name: dataUser.name,
        phoneNumber: dataUser.phoneNumber,
    })

    const dispatch = useDispatch();
    const [userProfile,setUserProfile] = useState({});
    useEffect(() => {
        dispatch(getDataProfile())
         getData('userProfile').then(res => {
            setUserProfile(res);
        })
    },[])

    const onSubmit = () => {
        getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/user`, form ,{
                headers: {
                    Authorization: resToken.value
                }
            }).then(res =>{
          
                navigation.reset({index: 0, routes:[{name:'MainApp', screen: 'Akun'}]})
                showMessage('Berhasil Update Profile', 'success');
                console.log(res)
            }).catch(err => {
                showMessage('Gagal Update Profile')
                navigation.reset({index: 0, routes:[{name: 'Akun'}]})
            })
        })
    }

    return (
        <View style={styles.container}>
            <Headers title="Edit Profile" subTitle="Edit profilemu disini" />
        <View style={styles.content}>
            <View style={styles.wrapper}>
                <TextInput
                    label= "Nama Lengkap"
                    placeholder={dataUser.name}
                    value ={form.name}
                    onChangeText={value => setForm('name', value)}
                />
                <Gap height={15} />
                <TextInput
                    label= "No Handphone"
                    placeholder={dataUser.phoneNumber}
                    value ={form.phoneNumber}
                    onChangeText={value => setForm('phoneNumber', value)}
                    keyboardType="numeric"
                />
            </View>
            <Gap height={20} />
            <Button text="Edit Profile" onPress={onSubmit} />
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        backgroundColor: 'white',
        paddingHorizontal: 25
    },
     addPhoto: {
    fontSize: 14,
    fontFamily: 'Nunito-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 100,
    height: 100,
    borderStyle: 'dashed',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
})
