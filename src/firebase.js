import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgl_HeHckgl3hLGFmGu6LegrzP9Vdexik",
  authDomain: "gerak-8425c.firebaseapp.com",
  databaseURL: "https://gerak-8425c.firebaseio.com",
  projectId: "gerak-8425c",
  storageBucket: "gerak-8425c.appspot.com",
  messagingSenderId: "536294918153",
  appId: "1:536294918153:web:f8131d350792fffd"
};

function requestMessagingToken(messaging) {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed', refreshedToken);
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
  });
}

function listenOnMessagingTokenChange(messaging) {
  messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
      console.log('Token refreshed', refreshedToken);
    }).catch((err) => {
      console.log('Unable to retrieve refreshed token ', err);
    });
  });
}

async function initializeFirebaseMessaging(firebase) {
  const messaging = firebase.messaging();
  console.log(process.env.FIREBASE_API_KEY);
  messaging.usePublicVapidKey("BP3J_FmtcDBDxqBVdMbbhDXTUMIKpgs2JNjnxErDO4qZX99KGKch9aH9ndn4O-A-jcywNDpbDlqrWvlDoeRXbXs");

  const permissions = await Notification.requestPermission();
  if (permissions === "granted") {
    requestMessagingToken(messaging);
    listenOnMessagingTokenChange(messaging);
  } else {
    console.log("Unable to get permissions");
  }
}

function initializeFirebase() {
  firebase.initializeApp(firebaseConfig);
  initializeFirebaseMessaging(firebase);
}

export {
  initializeFirebase
}