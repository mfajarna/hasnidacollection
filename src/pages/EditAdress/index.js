import axios from 'axios'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers, TextInput, Gap, Button } from '../../components'
import { getDataProfile } from '../../redux/action'
import { getData, useForm, showMessage, API_HOST } from '../../utils'

const EditAdress = ({navigation}) => {

    const{dataUser} = useSelector(state => state.lelangReducer)
    const dispatch = useDispatch();
    const[form,setForm] = useForm({
        address: dataUser.address,
        houseNumber: dataUser.houseNumber,
        city: dataUser.city,
        kecamatan: dataUser.kecamatan,
        postal_code: dataUser.postal_code

    })
    

    useEffect(() => {
        dispatch(getDataProfile())
    },[])


    const onSubmit = () => {
            getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/user`, form ,{
                headers: {
                    Authorization: resToken.value
                }
            }).then(res =>{
                navigation.reset({index: 0, routes:[{name:'MainApp', screen: 'Akun'}]})
                showMessage('Berhasil Update Alamat', 'success');
                console.log(res)
            }).catch(err => {
                showMessage('Gagal Update Alamat')
                navigation.reset({index: 0, routes:[{name: 'Akun'}]})
            })
        })
    }


    return (
        <View style={styles.container}>
            <Headers title="Edit Alamat Rumah" subTitle="Edit Alamat Rumah" onBack={()=> navigation.goBack()} />
            <View style={styles.content}>
            <ScrollView>
                <TextInput label="Alamat Rumah" placeholder={dataUser.address} value={form.address} onChangeText={value => setForm('address', value)} />
                <Gap height={10} />
                <TextInput label="No. Rumah"  placeholder={dataUser.houseNumber} value={form.houseNumber} onChangeText={value => setForm('houseNumber', value)} />
                <Gap height={10} />
                <TextInput label="Kota" placeholder={dataUser.city} value={form.city} onChangeText={value => setForm('city', value)} />
                <Gap height={10} />
                <TextInput label="Kecamatan" placeholder={dataUser.kecamatan} value={form.kecamatan} onChangeText={value => setForm('kecamatan', value)} />
                <Gap height={10} />
                <TextInput label="Kode Pos" keyboardType="numeric" placeholder="" value={form.postal_code} onChangeText={value => setForm('postal_code', value)} />
                <Gap height={10} />
            <Gap height={20} />
            <Button text="Ubat Alamat" onPress={onSubmit} />
            </ScrollView>
            </View>
        </View>
    )
}

export default EditAdress

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    content:{
        flex:1,
        backgroundColor: 'white',
        paddingHorizontal: 25
    }
})
