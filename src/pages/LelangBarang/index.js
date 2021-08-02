import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Ic_gagal } from '../../assets'
import {Headers,Gap, LelangItem} from '../../components'
import { getDataLelang } from '../../redux/action'
import { pushNotification } from '../../utils'


const LelangBarang = ({navigation}) => {

    const dispatch = useDispatch();
    const{dataLelang} = useSelector(state => state.lelangReducer);

    
    useEffect(() => {
        dispatch(getDataLelang());
    }, [])


    const renderLelang = () => {
        if(dataLelang.length == 0)
        {
            return(
                <View style={styles.noContent}>
                    <View style={styles.icon}>
                        <Ic_gagal />
                    </View>
                    <Text style={styles.textNoContent}>Oops barang yang dilelang belum ada,</Text>
                    <Text style={styles.textNoContent}>coba lain kali ya!</Text>
                </View>
            )
        }if(dataLelang.length > 0)
        { 
            return(
                dataLelang.map(lelang => {
                    return(
                        <View style={{ flex: 1 }}>
                            <LelangItem
                                key={lelang.id}
                                image={lelang.collection.picturePath}
                                name={lelang.collection.name}
                                desc={lelang.collection.description}
                                price={lelang.collection.price}
                                bid={lelang.bid}
                                onPress={() => navigation.navigate('LelangProses', lelang)}
                            />
                       </View>      
                    )
                })    
           )
        }
    }


    return (
        <View style={styles.container}>
            <Headers title="Lelang Barang" subTitle="Cari barang lelang disini" onBack={() => navigation.goBack()} />
            <Gap height={8} />
            <View style={styles.content}>
                <Text style={styles.desc}>Lelang barang disini</Text>
                <Text style={styles.desc}>cek barang sebelum terlambat!</Text>
                <Gap height={10} />
                {renderLelang()}
            </View>
        </View>
    )
}

export default LelangBarang

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 25,
    },
    desc:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 17
    },
      noContent:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25
  },
  textNoContent: {
      fontSize: 15,
      fontFamily: 'Nunito-SemiBold'
  },
  icon:{
      marginTop: -40,
      marginBottom: 10,
  }
})
    