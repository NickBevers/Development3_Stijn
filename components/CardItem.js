import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const CardItem = props => {
  return (
    // <TouchableOpacity activeOpacity={0.5} onPress={() => props.selectedCurrency(props.id)}>
    <TouchableOpacity>
        <Card cardElevation={5} cardMaxElevation={5} cornerRadius={5}>
            <Text>{props.coin}</Text>
            <Text>{props.value}</Text>
        </Card>
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
export default CardItem;