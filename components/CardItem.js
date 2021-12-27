import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const CardItem = props => {
  return (
    // <TouchableOpacity activeOpacity={0.5} onPress={() => props.selectedCurrency(props.id)}>
    <TouchableOpacity onPress={() => props.onpressedCurrency(props.coin)}>
        <Card style={styles.card__container} containerStyle={{borderColor:"#00000000"}}>
          <Card.Image source={getImage(props.coin)} style={styles.card__image}></Card.Image>
          <Text style={styles.card__text}>{props.coin}</Text>
        </Card>
    </TouchableOpacity >
  );
}

export function getImage(coin){
  switch (coin) {
    case "BTC":
      return require('./../assets/BTC.png');

    case "ETH":
      return require('./../assets/ETH.png');

    case "SOL":
      return require('./../assets/SOL.png');
    
    case "MANA":
      return require('./../assets/MANA.png');

    case "NEO":
      return require('./../assets/NEO.png');

    case "DOGE":
      return require('./../assets/DOGE.png');

    default:
      break;
  }
}

const styles = StyleSheet.create({
  card__container: {
    borderColor: "red",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0, //default is 1
    shadowRadius: 0//default is 1
  },
  card__text:{
    color:'#373b3f',
    textAlign:"center",
    fontSize: 18,
  },
  card__image:{
    resizeMode: "contain",
    marginBottom:20,
    // backgroundColor: "red"
  }
});
export default CardItem;