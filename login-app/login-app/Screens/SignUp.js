import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { firebase } from './Firebase/config';

function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const SignUp = () => {
 
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Sign Up Successfully');
        
          navigation.navigate('LogIn');
        
        var db = firebase.firestore();
        db.collection('users')
          .doc(email)
          .set({
            firstName: firstName,
            confirmPassword: confirmPassword,
          })
          .then(() => {})
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      }).catch((error)=>{
        alert('error')
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Full Name"
        style={styles.textInput}
        onChangeText={(firstName) => setFirstName(firstName)}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.textInput}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
      />

      <TouchableOpacity style={styles.paragraph}>
        <Text onPress={SignUp}>
          Sign up
        </Text>
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
  paragraph: {
     margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial black',
    paddingTop: '2%',
  },
  textInput: {
    borderWidth: '1px',
    width: '300px',
    height: '40px',
    paddingLeft: '10px',
    marginBottom: '10px',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },
});

export default SignUp;
