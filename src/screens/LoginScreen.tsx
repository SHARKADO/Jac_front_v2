import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { EvilIcons, FontAwesome } from '@expo/vector-icons'; 
import { Component, useState } from 'react'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image style={styles.logo} source={require('C:/Users/ingan/Desktop/JAC22/jac-front/assets/logo.png')}></Image>
      <Text style={styles.title}>Connexion à mon compte UNICEF</Text>

      <View style={styles.emailContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder="Adresse mail" 
        placeholderTextColor={'#9A9FA7'} 
        onChangeText={(email) => setEmail(email)}
      />
      <FontAwesome name="at" size={30} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder="Mot de passe" 
        placeholderTextColor={'#9A9FA7'} 
        autoCorrect={false}
        secureTextEntry={true} 
        onChangeText={(password) => setPassword(password)}
      />
      <EvilIcons name="lock" size={30} color="#9A9FA7" />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotBtn}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text>Pas encore inscrit ?</Text>
        <TouchableOpacity>
          <Text style={styles.signupBtn}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  },
  logo: {
  width: 176,
  height: 176,
  marginBottom: 60,
  },
  title: {
  color: '#172B4D',
  width: '80%',
  marginLeft: '-10%',
  marginBottom: 30,
  fontSize: 30,
  fontWeight: 'bold',
  },
  emailContainer: {
  flexDirection: 'row-reverse',
  paddingBottom: 10,
  alignItems: 'center',
  },
  textInput: {
  height: 50,
  width: 270,
  padding: 5,
  marginLeft: 10,
  borderBottomWidth: 2,
  borderColor: '#DDDEE1'
  },

  forgotBtn: {
  color: '#1962D0',
  fontSize: 13,
  fontWeight: '700',
  marginTop: 30,
  height: 30,
  marginBottom: 20
  },
  loginBtn: {
  borderRadius: 13,
  width: 330,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:10,
  backgroundColor:"#0065FF",
  },
  loginText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  },
  signupBtn: {
  color: '#1962D0',
  fontSize: 13,
  fontWeight: '700',
  marginTop: 30,
  height: 30,
  marginBottom: 20,
  paddingLeft: 5,
  },
  signup: {
  flexDirection: 'row',
  alignItems: 'center'
  }
}) 