import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native'

const SizeItem = ({category}) => {

    const[select,setSelect] = useState('');
    const picker = () => {
        if(category === "HEELS")
        {
            return(
            <Picker
                selectedValue={select}
                onValueChange={(itemValue, itemIndex) =>
                    setSelect(itemValue)
                }>
                <Picker.Item style={styles.picker} label="--Pilih Size--" />
                <Picker.Item style={styles.picker} label="32" value="32" />
                <Picker.Item style={styles.picker} label="33" value="33" />
                <Picker.Item style={styles.picker} label="34" value="34" />
                <Picker.Item style={styles.picker} label="35" value="35" />
                <Picker.Item style={styles.picker} label="36" value="36" />
                <Picker.Item style={styles.picker} label="37" value="37" />
                <Picker.Item style={styles.picker} label="38" value="39" />
                <Picker.Item style={styles.picker} label="39" value="39" />
                <Picker.Item style={styles.picker} label="40" value="40" />
            </Picker>
            )
        }
        if(category === "HIJAB")
        {
            return(
                 <Picker
                selectedValue={select}
                onValueChange={(itemValue, itemIndex) =>
                    setSelect(itemValue)
                }>
                <Picker.Item style={styles.picker} label="--Pilih Size--" value="null" />
                <Picker.Item style={styles.picker} label="115x115" value="115x115" />
                <Picker.Item style={styles.picker} label="80x180" value="80x180" />
            </Picker>
            )
        }
    }

    return (
        <View style={styles.box}>
            {picker()}
        </View>
    )
}

export default SizeItem

const styles = StyleSheet.create({
    picker: {
        color: 'black',
        fontSize: 14,
    },
    box:{
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        overflow: "hidden",
        padding: 0,
    }
})
