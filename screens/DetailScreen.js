import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getImage } from '../components/CardItem';
import DetailBox from '../components/DetailBox';
import {DetailPercentageBox} from '../components/DetailBox';

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

  return (
    <View style={styles.screen}>
      <View style={styles.topImage}>
        <Image style={styles.image} source={getImage(currencyId)}></Image>
      </View>
      <View style={styles.container}>
        <DetailBox title="Current price" data={cryptoData["PRICE"]}/>
        <DetailPercentageBox title="Change today" data={cryptoData["CHANGEPCTDAY"]}/>
        <DetailPercentageBox title="Change past 24h" data={cryptoData["CHANGEPCT24HOUR"]}/>
        <DetailBox title="Lowest price this hour" data={cryptoData["LOWHOUR"]}/>
        <DetailBox title="Highest price this hour" data={cryptoData["HIGHHOUR"]}/>
        <DetailBox title="Market cap" data={cryptoData["MKTCAP"]}/>
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