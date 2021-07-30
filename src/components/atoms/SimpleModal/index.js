import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Dimensions} from 'react-native'
import { API_HOST, getData, showMessage, useForm } from '../../../utils';
import BidInput from '../BidInput';

    const width = Dimensions.get('window').width;
    const height_modal =150;

const SimpleModal = ({changeModalVisible,setData, listData,dataUserLelang, dataLelangTerbesar}) => {
    const[user,setUser] = useState();
    const[token,setToken] = useState('');
    const navigation = useNavigation()
    const closeModal = (bool,data) =>{
        changeModalVisible(bool)
        setData(data)
    }
    useEffect(() => {
        getData('userProfile').then(resProfile => {
            setUser(resProfile.id)
        })
        getData('token').then(resToken => {
            setToken(resToken.value)
        })
    },[])

    const[form,setForm] = useForm({
        jumlah_bid: ''
    })

       const data = {
        id_lelang: listData.id,
        id_collection: listData.collection.id,
        id_users: user,
        jumlah_bid: form.jumlah_bid
    }

    const onSubmit = () => {
        // Kalau jumlah bid kurang dari minimum bid tidak bisa submit
        if(form.jumlah_bid < listData.bid)
        {
            alert('Jumlah Bid tidak boleh kurang dari minimum open bid!')
            return false;
        }
        // Kalau input jumlah bid kosong tidak bisa submit
        if(form.jumlah_bid === "")
        {
            alert('kosong!')
        }
        // Kalau Open bid diatas harga asli barang tida bisa submit
        if(form.jumlah_bid > listData.collection.price)
        {
            alert('Tidak bisa input bid diatas harga asli barang!')
            return false;
        }
        // Kalau Open bid dibawah harga terakhir orang masang tidak bisa
        if(form.jumlah_bid < dataLelangTerbesar )
        {
            alert('Tidak bisa input bid dibawah harga penginputan terakhir!')
            return false;
        }
        
        if(form.jumlah_bid !== ""){
            axios.post(`${API_HOST.url}/prosesLelang`,data, {
                headers:{
                    Authorization: token
                }
            }).then(resData => {
                console.log(resData)
                navigation.navigate('LelangBarang');
                showMessage('Berhasil menginputkan bid!','success')
            }).catch(err =>{
                console.log(err.message)
            })
        }
        
  
    }

    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.text}>Masukan Jumlah Bid!</Text>
                <View style={styles.content}>
                    <View style={styles.bid}>
                        <BidInput placeholder="Bid Input" keyboardType="numeric" value={form.jumlah_bid} onChangeText={value => setForm('jumlah_bid', value)} />
                    </View>
                <View style={styles.buttonContent}>
                    <View>
                        <TouchableOpacity style={styles.buttonClose} onPress={() => closeModal(false,'Cancel')}>
                            <Text style={styles.textContent}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.textContent}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SimpleModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: height_modal,
        width: width - 80,
        paddingTop: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFFED8',
        borderRadius: 10
    },
    button:{
        padding: 9,
        backgroundColor:'white',
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 8,
        backgroundColor: '#4AA96C'
    },
    buttonClose:{
        padding: 9,
        backgroundColor:'white',
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 8,
        backgroundColor: '#F55C47',
    },
    text:{
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: 'Nunito-SemiBold'
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContent:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: 'white'
    }
})
