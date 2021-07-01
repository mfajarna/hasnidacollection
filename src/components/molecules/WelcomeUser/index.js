import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyImg1, DummyImg3 } from '../../../assets'
import { getData } from '../../../utils/storage';

const WelcomeUser = () => {
    const [userProfile,setUserProfile] = useState({});
    useEffect(() =>  {
        getData('userProfile').then(res => {
            setUserProfile(res);
        })
    }, []);
    return (
        <View>
           <View style={styles.profileContainer}>
               <View>
                   <Text style={styles.nameCard}>Hello! {userProfile.name}</Text>
                   <Text style={styles.desc}>Ayo belanja sekarang!</Text>
               </View>
               <Image source={{ uri: userProfile.profile_photo_path }} style={styles.profile}/>
           </View>
        </View>
    )
}

export default WelcomeUser

const styles = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    nameCard:{
        fontSize: 20,
        fontFamily: 'Nunito-Medium',
        color: '#020202',
    },
    desc:{
        fontSize: 13,
        fontFamily: 'Nunito-light',
        color: '#8D92A3', 
    }
})
