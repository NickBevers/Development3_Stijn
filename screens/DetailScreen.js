import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getImage } from '../components/CardItem';

const DetailScreen = ({ route, navigation }) => {
  const {currencyId} = route.params;
  const [cryptoData, setcryptoData] = useState({});

  const getCryptoDetail = async () => {
    const urlToFetch = encodeURI("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + currencyId + "&tsyms=EUR");
    await fetch(urlToFetch, {
      method:"GET"
    })
    .then((res) => {return res.json();})
    .then(async (resJson) => {
      // console.log(resJson); 
      let temp = resJson["DISPLAY"][currencyId]["EUR"];
      // console.log(temp);
      setcryptoData(temp);
      // console.log(temp);
    })
    .catch((error) => {
        console.error(error);
    });
  }

  useEffect(() => {
    getCryptoDetail();
  }, []);

  useEffect(()=>{
    console.log(cryptoData)
  }, [cryptoData]);

  return (
    <View style={styles.screen}>
      <View style={styles.topImage}>
        <Image style={styles.image} source={getImage(currencyId)}></Image>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Current price</Text>
          <Text style={styles.square}>{cryptoData["PRICE"]}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Change today</Text>
          <Text style={styles.square}>% {cryptoData["CHANGEPCTDAY"]}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Change past 24h</Text>
          <Text style={styles.square}>% {cryptoData["CHANGEPCT24HOUR"]}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Lowest price this hour</Text>
          <Text style={styles.square}>{cryptoData["LOWHOUR"]}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Highest price this hour</Text>
          <Text style={styles.square}>{cryptoData["HIGHHOUR"]}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Market cap</Text>
          <Text style={styles.square}>{cryptoData["MKTCAP"]}</Text>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  topImage:{
    marginTop: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width: 100,
    height: 100,
  },
  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    flexWrap: "wrap",
  },
  card:{
    backgroundColor: 'white',
    paddingTop: 15,
    width: 100,
    minWidth: 100,
    height: 100,
    borderColor: "#00000050",
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between'
  },
  title:{
    textAlign: 'center'
  },
  square:{
    textAlign: 'center',
    marginBottom: 10
  },
  scrollView:{
    height: "100%",
    width:"100%",
  }
});

export default DetailScreen;