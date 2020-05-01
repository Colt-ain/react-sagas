import firebase from 'firebase';
const appName = 'redux-sagas-d8af8';

export const firebaseConfig = {
	apiKey: `AIzaSyAzqAWGMVk0KILvaudygZmRmyPDPt8lWVs`,
	authDomain: `${appName}.firebaseapp.com`,
	databaseURL: `https://${appName}.firebaseio.com`,
	projectId: appName,
	storageBucket: `${appName}.appspot.com`,
	messagingSenderId: `264298413784`,
	appId: `1:264298413784:web:b31ceb2ad4f2ff2fe961ad`,
};

firebase.initializeApp(firebaseConfig);
