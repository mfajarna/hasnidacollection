import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import { DummyAdmin, DummyImg3 } from '../../../assets'

const ListAdmin = ({onPress, name, desc,profile}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DummyAdmin} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListAdmin

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
    avatar: {width: 46, height: 46, borderRadius: 46 / 2},
    content: {flex: 1, marginLeft: 16},
    name: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#020202',
    },
    desc: {
        fontSize: 12,
        fontFamily: 'Nunito-light',
        color: '#8D92A3',
        textTransform: 'capitalize',
    },
})
