import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList, TextInput } from 'react-native';

import CardItem from '../components/CardItem';

const HomeScreen = ({ navigation }) => {
  const [crypto, setCrypto] = useState([]);
  
  const getCrypto = async () => {
      await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL,MANA,NEO,DOGE&tsyms=EUR&api_key=1a8b5130cf83aba16413a780b46534fdbd8f8833c334c477f8f6ca143082fd8d", {
      method:"GET"
      })
      .then((res) => res.json())
      .then((resJson) => {
          setCrypto(resJson);
      })
      .catch((error) => {
          console.error(error);
      });
  }

  useEffect(() => {
    getCrypto();
  }, []);
  

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        {Object.keys(crypto).map(currency => <CardItem coin={currency} value={currency['EUR']} imageToLoad={currency} style={styles.cards} key={currency} onpressedCurrency={(coin)=>{navigation.navigate('Detail', {currencyId: coin})}}> </CardItem>)}
      </ScrollView>
    </View >
  );
} 
  
  const styles = StyleSheet.create({
    screen: {
      padding: 30,
    },
    scrollView:{
      height: "100%",
      width:"100%",
    }
  });
  export default HomeScreen;