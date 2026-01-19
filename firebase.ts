// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAaxj_PtatjA70DxJq7se3p98xBzPvOTHs",
//   authDomain: "nisargascan.firebaseapp.com",
//   projectId: "nisargascan",
//   storageBucket: "nisargascan.firebasestorage.app",
//   messagingSenderId: "768727799642",
//   appId: "1:768727799642:web:7c67c80cae362551a54563"
// };

// const app = initializeApp(firebaseConfig);

// // 🔐 Firebase Authentication
// export const auth = getAuth(app);

// // 🗄 Firestore Database
// export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyAaxj_PtatjA70DxJq7se3p98xBzPvOTHs",
//   authDomain: "nisargascan.firebaseapp.com",
//   projectId: "nisargascan",
//   storageBucket: "nisargascan.firebasestorage.app",
//   messagingSenderId: "768727799642",
//   appId: "1:768727799642:web:7c67c80cae362551a54563"
// };

// import { initializeApp, getApps, getApp } from 'firebase/app';
// import {
//   initializeAuth,
//   getAuth,
//   getReactNativePersistence,
// } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAaxj_PtatjA70DxJq7se3p98xBzPvOTHs",
//   authDomain: "nisargascan.firebaseapp.com",
//   projectId: "nisargascan",
//   storageBucket: "nisargascan.firebasestorage.app",
//   messagingSenderId: "768727799642",
//   appId: "1:768727799642:web:7c67c80cae362551a54563"
// };

// // ✅ Prevent re-initialization
// const app = getApps().length === 0
//   ? initializeApp(firebaseConfig)
//   : getApp();

// // ✅ Safe Auth initialization for Expo
// export const auth =
//   getApps().length === 0
//     ? initializeAuth(app, {
//         persistence: getReactNativePersistence(AsyncStorage),
//       })
//     : getAuth(app);

// export const db = getFirestore(app);

import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAaxj_PtatjA70DxJq7se3p98xBzPvOTHs",
  authDomain: "nisargascan.firebaseapp.com",
  projectId: "nisargascan",
  storageBucket: "nisargascan.firebasestorage.app",
  messagingSenderId: "768727799642",
  appId: "1:768727799642:web:7c67c80cae362551a54563"
};

// ✅ App initialization (safe for hot reload)
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// ✅ Auth initialization (CRITICAL FIX)
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (e: any) {
  // If already initialized, reuse it
  auth = getAuth(app);
}

export { auth };
export const db = getFirestore(app);
