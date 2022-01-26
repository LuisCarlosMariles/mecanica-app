// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.1.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.1.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyADutkwq0N-JLXVSvBCNuWe7cyjuLDiiYs",
    authDomain: "mecanica-app.firebaseapp.com",
    databaseURL: "https://mecanica-app-default-rtdb.firebaseio.com",
    projectId: "mecanica-app",
    storageBucket: "mecanica-app.appspot.com",
    messagingSenderId: "947454305691",
    appId: "1:947454305691:web:b86cd166d12c9dfc692d3e",
    measurementId: "G-JK3MMG2K65"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();