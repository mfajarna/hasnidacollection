import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Button, Gap, Headers, Number } from '../../components'
import { Rating } from 'react-native-ratings'
import { API_HOST, getData } from '../../utils'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dataPerhitungan } from '../../redux/action'

const RatingBintang = ({route, navigation}) => {
    const [rating,setRating] = useState(0);
    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating,setMaxRating] = useState([1,2,3,4,5]);
    const dispatch = useDispatch();
    const {perhitunganAkhir} = useSelector(state => state.orderReducer);
    const [token,setToken] = useState('');


    const dataKoleksi = route.params;

    const id_koleksi = dataKoleksi.collection.id;

    // Perhitungan Rating inputan user
    const perhitungan = defaultRating * dataKoleksi.quantity;
    console.log('Kuantity', dataKoleksi.quantity)
    console.log('Perhitungan Rating User = ', perhitungan)

    useEffect(() => {
      dispatch(dataPerhitungan(id_koleksi))
        getData("token").then(res => {
            setToken(res.value)
        })
    },[])
        
        // Perhitungan Akhir Database 
        var perhitunganAkhirTotal = perhitunganAkhir.perhitungan_akhir;
        console.log('Perhitungan Akhir Database', perhitunganAkhirTotal)
        // Perhitungan Jumlah Order
        var totalJumlahOrder = perhitunganAkhir.total_jumlah_order;
        // ini input database
        var pembagiJumlahOrder = dataKoleksi.quantity + totalJumlahOrder;

        console.log('total jumlah', totalJumlahOrder)
        
        // Perhitungan Akhir
        const a = perhitunganAkhirTotal + perhitungan;
        console.log('Fix Perhitungan Akhir', a)
        var b = 0;
        

        
        if(totalJumlahOrder == 0)
        {
            b = a / dataKoleksi.quantity;
           
        }if(totalJumlahOrder > 0){
            b = a / pembagiJumlahOrder
        }

      
         const data1 = {
             rate: b
         }
        
         const datab = {
             perhitungan_akhir: a
         }

         const datac = {
            total_jumlah_order : pembagiJumlahOrder
         }
         
    const onSubmit = () => {
        axios.all([
            axios.post(`${API_HOST.url}/collection-rate/${id_koleksi}`, data1, {
                headers: {
                    Authorization: token
                }
            }),
            axios.post(`${API_HOST.url}/collection-perhitungan-akhir/${id_koleksi}`, datab, {
                headers: {
                    Authorization: token
                }
            }),
            axios.post(`${API_HOST.url}/collection-total-jumlah-order/${id_koleksi}`, datac, {
                headers: {
                    Authorization: token
                }
            })
        ]).then(axios.spread((res1,res2,res3) => {
            console.log('Berhasil')
            navigation.navigate('Keranjang')
        })).catch(err => {
            console.log('err',err.response.data)
        })

    }

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const startImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'


    const CustomRatingBar = () => {
        return(
            <View style={styles.customRatingStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity
                            key={item}
                            onPress={() => setDefaultRating(item)}
                            >
                            
                            <Image
                                style={styles.starImgStyle}
                                source={
                                    item <= defaultRating
                                        ? {uri: starImgFilled}
                                        : {uri: startImgCorner}
                                }
                            />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Headers title="Rating Produk" subTitle="Berikan rating untuk produk" />
            <View style={styles.content}>
                <View styles={styles.imageContent}>
                    <Image style={styles.image} source={{ uri: dataKoleksi.collection.picturePath }} />
                    <View> 
                        <Text style={styles.text}>Nama Koleksi {dataKoleksi.collection.name}</Text>
                        <Text style={styles.text}>Harga <Number number={dataKoleksi.collection.price} /></Text>
                        <Text style={styles.text}>Jumlah Beli {dataKoleksi.quantity}</Text>
                        <Text style={styles.text}>Harga Total <Number number={dataKoleksi.total} /></Text>
                    </View>
                </View>
                <View style={styles.contentTengah}>
                    <Gap height={25} />
                    <Text style={styles.text}>Beri Rating Koleksi</Text>
                    <CustomRatingBar />
                    <Text>
                        {defaultRating + '/' + maxRating.length}
                    </Text>
                </View>
            </View>
            <View style={styles.footer} >
                <Button text="Send Rating" onPress={onSubmit} />
            </View>
            
        </View>
    )
}

export default RatingBintang

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25
    },
    customRatingStyle:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    starImgStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover'
    },
    image:{
        marginTop: 5,
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom : 5,
  },
  imageContent:{
    flexDirection: 'row',
    flex: 1,
  },
  text:{
      fontFamily: "Nunito-Regular",
      fontSize: 15
  },
  contentTengah: {
      alignItems: 'center'
  },
  footer:{
      marginBottom: 15,
      paddingHorizontal: 10
  }
})
