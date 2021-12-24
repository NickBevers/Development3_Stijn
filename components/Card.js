import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview';

const Card = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.selectedCurrency(props.id)}>
        <CardView cardElevation={5} cardMaxElevation={5} cornerRadius={5}>
            <Text>{props.coin}</Text>
            <Text>{props.value}</Text>
        </CardView>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  }
});
export default Card;