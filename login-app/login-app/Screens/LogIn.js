import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {firebase} from './Firebase/config';

function LogIn({ navigation }) {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Sign In successfully');
        {
          navigation.navigate('Home');
        }
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
     

      <TextInput
        placeholder='Email'
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder='Password'
        style={styles.textInput}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity style={styles.paragraph}>
        <Text style={styles.Text3} onPress={LogIn}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Don't have an account ?{' '}
        <Text
          style={styles.text2}
          onPress={() => navigation.navigate('SignUp')}>
          Sign up
        </Text>
      </Text>
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
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial',
    backgroundColor: '#063970',
    width: '100px',
    height: '30px',
    marginBottom: '10px',
  },
  textInput: {
    borderWidth: '1px',
    width: '300px',
    height: '40px',
    paddingLeft: '10px',
    marginBottom: '10px',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },
 text:{
   fontWeight:'bold',
 },
 text2:{
   color:''
 }
  
});

export default LogIn;

