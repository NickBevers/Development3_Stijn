import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';

import CardItem from './../components/CardItem';

const MoviesScreen = ({ navigation }) => {
  const [crypto, setCrypto] = useState([]);
  
  const getCrypto = async () => {
      await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL,MANA,NEO,DOGE&tsyms=EUR&api_key=1a8b5130cf83aba16413a780b46534fdbd8f8833c334c477f8f6ca143082fd8d", {
      method:"GET"
      })
      .then((res) => res.json())
      .then((resJson) => {
          // console.log(resJson);
          setCrypto(resJson);
          // currencies = Object.keys(resJson);
          // console.log(currencies);
          // currencies.map(cur => {console.log(cur)});
          //setCrypto()
          // this.setState({
          //     data: resJson
          // })
      })
      .catch((error) => {
          console.error(error);
      });
  }

  useEffect(() => {
    getCrypto();
  }, []);

  // const getMoviesByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
  //   try {
  //     if (enteredText.length > 3) {
  //       const url = encodeURI("https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/" + enteredText + "/");
  //       //console.log(url);
  //       const response = await fetch(url, {
  //         "method": "GET",
  //         "headers": {
  //           "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
  //           "x-rapidapi-key": "!!!!!!![VUL HIER Je EIGEN API KEY IN]!!!!!!!!"
  //         }
  //       })
  //       const json = await response.json();
  //       // console.log(json);
  //       setMovies(json.results);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // console.log(crypto);

  return (
    <View style={styles.screen}>
      {Object.keys(crypto).map(currency => <CardItem coin={currency} value={currency['EUR']}> </CardItem>)}
      {/* {currencies.map(currency => <CardItem>{currency}</CardItem>)} */}
    </View >
  );
} 
  
  const styles = StyleSheet.create({
    screen: {
      padding: 50,
    }
  });
  export default MoviesScreen;