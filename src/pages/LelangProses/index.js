import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal , ScrollView} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {Headers, Number, Gap, SimpleModal, UserLelang} from '../../components';
import { getListLelangUser } from '../../redux/action/listuserlelang';
import { getData } from '../../utils';

const LelangProses = ({route,navigation}) => {
    const{id,bid,status,collection} = route.params;
    const[isModalVisible,setisModalVisible] = useState(false);
    const[chooseData,setchooseData] = useState();
    const listData = {id,bid,status,collection};

    const dispatch = useDispatch();
    const{dataUserLelang} = useSelector(state => state.listUserLelangReducer);

    useEffect(() => {
        dispatch(getListLelangUser(id));
    },[])

    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (data) => {
        setchooseData(data)
    }
    return (
        <View style={styles.container}>
            <Headers title="Lelang" subTitle="Pasang bid terbesarmu disini!" onBack={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.div}>
                    <Text style={styles.text}>Detail Barang</Text> 
                    <View style={styles.detailItem}>
                        <View style={styles.containerImage}>
                            <Image style={styles.image} source={{ uri : collection.picturePath }} />
                        </View>
                        <View style={styles.contentDesc}>
                            <Text style={styles.name}>{collection.name}</Text>
                            <Text style={styles.desc}>{collection.description}</Text>
                            <Text style={styles.desc}><Number number={collection.price} /></Text>
                            <Gap height={15} />
                            <Text style={styles.name}>Open Bid: <Number number={bid} /></Text>
                        </View>
                        <View style={styles.button}>
                        <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.6} onPress={() => changeModalVisible(true)}>
                                <Text style={styles.textBayar}>Open Bid</Text>
                        </TouchableOpacity>

                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isModalVisible}
                            onRequestClose={() => changeModalVisible(false)}
                        >
                            <SimpleModal 
                                changeModalVisible={changeModalVisible}
                                setData={setData}
                                listData={listData} 
                            />
                        </Modal>
                        </View>
                    </View>
                </View>
  
                <Gap height={10} />
                <Text style={styles.text}>User yang sudah masang bid </Text> 
                <Gap height={8} />
                <View style={styles.users}>
                    <ScrollView>
                    {dataUserLelang.map(data => {
                        return (
                                <UserLelang
                                    key={data.id}
                                    name={data.user.name}
                                    jumlah_bid={data.jumlah_bid}
                                />
                        )
                    })}
                    </ScrollView>
                </View>
            </View> 
        </View>
    )
}

export default LelangProses

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    content:{
        flex: 1,
        paddingHorizontal: 25,
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    text:{
        fontSize: 16,
        fontFamily: 'Nunito-Regular'
    },
    detailItem: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        

        padding: 8,
    },
    desc:{
        fontFamily: 'Nunito-Light',
        fontSize: 14,
        marginLeft: 10
    },
    name:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 15,
        marginLeft: 10
    },
    buttonBayar: {
        backgroundColor: '#26B99A',
        padding: 6,
        borderRadius: 3,
  },
  textBayar:{
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: 'white'
  },
  contentDesc:{
      marginLeft: -30,
  },
  containerImage:{
    marginLeft: -15,
  },
  button:{
      justifyContent: 'center'
  },
  users:{
      flex: 1
  }
})
