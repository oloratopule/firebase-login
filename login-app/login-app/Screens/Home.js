import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { firebase } from './Firebase/config';

function Home({ navigation }) {
  const Home = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCrential) => {
        alert('Sign In Successfully');
        {
          navigation.navigate('Home');
        }
        var user = userCrential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const [ArtistName, setArtistName] = useState('');
  const [Track, setTrack] = useState('');
  const [Album, setAlbum] = useState('');
  const [Website, setWebsite] = useState('');

  const handleSubmit = () => {
    const user = firebase.auth().currentUser;
    const id = user.uid;

    firebase
      .firestore()
      .collection('Bookmark')
      .doc(id)
      .collection('music')
      .add({ ArtistName, Track, Album, Website })
      .then(() => {
        alert('SUCCESS');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Artist Name"
        onChangeText={(artist) => setArtistName(artist)}
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Track"
        onChangeText={(track) => setTrack(track)}
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Album"
        onChangeText={(album) => setAlbum(album)}
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Website"
        onChangeText={(website) => setWebsite(website)}
        style={styles.TextInput}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.Text2}>
        Save
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Bookmark')}
        >
        View Bookmark
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexShrink: '0',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '20%',
  },
  TextInput: {
    borderWidth: '1px',
    borderColor: '#333',
    width: '300px',
    height: '40px',
    paddingLeft: '10px',
    marginBottom: '10px',
  },
  Text2: {
    margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial black',
    paddingTop: '2%',
    //backgroundColor:'brown'
  },
});

export default Home;
