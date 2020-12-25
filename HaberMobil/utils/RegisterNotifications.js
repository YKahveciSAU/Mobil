import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase'

export const registerForPushNotifications = async() =>{
    const status = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let Fstatus=status;
    
    if (status !== 'granted') {
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        Fstatus=status;
    }
    if (Fstatus !== 'granted') {return;}
    let token=await Notifications.getExpoPushTokenAsync();
    console.log(token.data)

        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref("users").child(uid).update({
            expoPushToken: token.data
        });
}

async function sendPushNotification(expoPushToken,title,link) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: title,
        body: link,
        data: { data: 'Buraya' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}

export const sendNotificationToAllUsers = async (title,link) => {
    const users = await firebase.database().ref('/users').orderByChild('token');
    users.once("value").then(snapshot => {
        let data;
        snapshot.forEach((childSub) => {
            let childData = childSub.toJSON();
            data = childData.expoPushToken;
            console.log(data);
            sendPushNotification(data,title,link);
        });

    })
}