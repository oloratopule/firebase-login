import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from './Firebase/config';

function Display() {

const [data, setData] = useState([]);
let id=firebase.auth().currentUser.uid 
useEffect(() => {
firebase.firestore().collection("Bookmarks").doc(id).collection('music').onSnapshot((snapshot) => {
  const data = snapshot.doc.map((doc) =>({
    id:doc.id,
    ...doc.data(),
  }));
  setData(data);
});
}, []);
return data;

const display =({navigation}) => {
  let id=firebase.auth().currentUser.uid;
  const handleOnDelete = (user) => {
    firebase.firestore().collection("Bookmarks").doc(id).collection("music").doc(user).delete().then(() => {alert("Deleted")
    });
  }
  
}
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.row}>
  //       {props.data.map((item) => (
  //         <View>
  //           <View style={styles.card}>
  //             <View style={styles.cardBody}>
  //               <Text key={item.id}>ArtistName{item.ArtistName}</Text>
  //               <Text key={item.id}>Track {item.Track}</Text>
  //               <Text key={item.id}>Album {item.Album}</Text>
  //               <Text key={item.id}>Website {item.Website}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       ))}
  //     </View>
  //   </View>
  // );
  }

export default Display;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#abdbe3',
    boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    flexShrink: '0',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '20%',
  },
});




// function displayy() {
//     const [data, setData] = useState([]);
//     let id = firebase.auth().currentUser.uid
//     useEffect(() => {
//         firebase.firestore().collection("Bookmarks").doc(id).collection("music").onSnapshot((snapshot) => {
//             console.log()
//             const data = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             setData(data);
//         });
//     }, []);
//     return data;
// }
// const handleOnDelete = (id) => {
//     firebase.firestore.collection("Bookmarks").docs(id).collection("music").doc(user).delete().then(() => {
//         arlet("Deleted")
//     });
// }