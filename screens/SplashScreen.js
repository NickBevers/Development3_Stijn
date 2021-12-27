import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {  
  const delay = 5000;

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('HomeTab');
    }, delay)
  }, []);
  

  return (
    <View style={styles.screen}>
      <Image source={require('./../assets/logo.png')} style={{height:"9%"}}></Image>
    </View >
  );
} 
  
  const styles = StyleSheet.create({
    screen: {
      padding: 50,
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
  });
  export default SplashScreen;