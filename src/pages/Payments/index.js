import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ic_bank_account } from '../../assets'
import { Headers, ItemValueCopy, Gap } from '../../components'

const Payments = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Payments" subTitle="Metode Bayar Hasnida Collection" onBack={()=> navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.transfer}>
                    <Ic_bank_account />
                    <Text style={styles.textBank}>Informasi Transfer Bank</Text>
              </View>
              <View style={styles.informasiBank}>
                   <ItemValueCopy label="A.N Nabila salsa hasnida (BNI)" value="0984003477" />
                   <ItemValueCopy label="A.N Nabila salsa hasnida(BCA)" value="1330349278" />
                   <ItemValueCopy label="DANA" value="081393211636" />
                   <Gap height={10} /> 
                   <Text style={styles.textBank}>*Note: Klik nomor pin ATM untuk copy </Text>
              </View>
            </View>
        </View>
    )
}

export default Payments

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',

    },
    transfer: {
        paddingTop: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    textBank:{
        fontSize: 14,
        fontFamily:'Nunito-Regular',
        marginLeft: 10,
    },
      informasiBank: {
    paddingTop: 10,
    paddingHorizontal: 13,
  }
})
