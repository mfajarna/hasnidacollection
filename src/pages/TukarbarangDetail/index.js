import React, { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Headers, ItemValue, Gap, TextInput, Button, showMessage } from '../../components';
import { getData, useForm } from '../../utils';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const TukarbarangDetail = ({route,navigation}) => {
    const{collection,quantity,total,user_id,id} = route.params;
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const[form,setForm] = useForm({
         id_collection : collection.id,
         id_users: user_id,
         alasan_tukar_barang: '',
         status: 'PENDING'
    })
    useEffect(() =>{
        getData("token").then(res => {
            setToken(res.value)
        })
    },[])

    const id_transaksi = id;
    const status = {
        status_tukar_barang: 'ON_CONFIRMATION'
    }

    const onSubmit = () =>{ 
        
        axios.all([
            axios.post('http://27.112.78.10/api/tukarBarang', form , {
                headers:{
                    Authorization: token
                }
            }),
            axios.post(`http://27.112.78.10/api/updateStatus/${id_transaksi}`, status , {
                headers:{
                    Authorization: token
                }
            }),
        ]).then(axios.spread((res1,res2) => {
             navigation.navigate('UpdateBuktiPhoto',res1)
             console.log('update status',res2)
        })).catch(err => {
            console.log(err.message)
        })
        
    }

    return (
        <View style={styles.container}>
            <Headers title="Tukar Barang Detail" subTitle="Masukan pengaduan untuk tukar barang" onBack={() => navigation.goBack()} />
            <ScrollView>
            <View style={styles.content}>
                <View style={styles.contentAtas}>  
                  
                    <Text style={styles.text}>Detail Barang</Text>
                    <Gap height={15}/>
                    <ItemValue label="Nama Barang" value={collection.name} />
                    <ItemValue label="Deskripsi Barang" value={collection.description} />
                    <ItemValue label="Harga" type="currency" value={collection.price}/>
                    <ItemValue label="Quantity" value={quantity}/>
                    <ItemValue label="Total Harga" type="currency" value={total} />
                    <Gap height={15}/>
                    <Text style={styles.text}>Ticket Tukar Barang</Text>
                    <Gap height={10}/>                    
                    <TextInput label="Alasan Tukar Barang" placeholder="Masukan alasan tukar barang" value={form.alasan_tukar_barang} onChangeText={value => setForm('alasan_tukar_barang', value)} />
                    <Gap height={10}/>
                </View>
                <View style={styles.button}>
                    <Button text="Selanjutnya" onPress={onSubmit} />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default TukarbarangDetail

const styles = StyleSheet.create({
    contentAtas:{
        flex: 1,
    },
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        backgroundColor: 'white',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        flex: 1
    },
    text:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18
    },
    button: {
        marginBottom: 20,
    },
    photoPembayaran: {
      fontSize: 15,
      fontFamily: 'Nunito-SemiBold',
      backgroundColor: '#66B49D',
      color: 'white',
      padding: 8,
      borderRadius: 5,
      marginVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
  },
    photoImage:{
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
    photoContent:{
      backgroundColor: 'white',
      alignItems: "center",
      paddingBottom: 40,
  },
  contentPhoto:{
    flex: 1,
 
  }
})
