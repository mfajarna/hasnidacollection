import PushNotification, {Importance} from 'react-native-push-notification';

class Notifikasi {
    // configure = () => {
    //   PushNotification.configure({

    //   onRegister: function (token) {
    //     console.log("TOKEN:", token);
    //   },


    //   onNotification: function (notification) {
    //     console.log("NOTIFICATION:", notification);
    
    //     notification.finish(PushNotificationIOS.FetchResult.NoData);
    //   },

  
    //     onAction: function (notification) {
    //       console.log("ACTION:", notification.action);
    //       console.log("NOTIFICATION:", notification);

    
    //     },

        
    //     onRegistrationError: function(err) {
    //       console.error(err.message, err);
    //     },

  
    //     permissions: {
    //       alert: true,
    //       badge: true,
    //       sound: true,
    //     },


    //     popInitialNotification: true,

    //     requestPermissions: true,
    //     requestPermissions: Platform.OS === 'ios'
    // });
    // }
    
  //   buatChannel = (channel) => {
  //   PushNotification.createChannel(
  //   {
  //     channelId: channel, // (required)
  //     channelName: "My channel", // (required)
  //     channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
  //     playSound: false, // (optional) default: true
  //     soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
  //     importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
  //     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  //   },
  //   (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  // );
  //   }

    kirimNotifikasi = (pesan) => {
      PushNotification.localNotification({
            channelId: "fcm_default_channel",
            title: 'Hasnida Collection', // (optional)
            message: pesan, // (required)
            // largeIcon: 'mipmap@ic_logos',
            // smallIcon: 'mipmap@ic_logos',
            vibrate: true, // (optional) default: true
            vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            priority: 'high', // (optional) set notification priority, default: high
            visibility: 'public', // (optional) set notification visibility, default: private
            importance: 'high', // (optional) set notification importance, default: high
            allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
            soundName: 'default',
      })
    }
}

export const pushNotification = new Notifikasi();



