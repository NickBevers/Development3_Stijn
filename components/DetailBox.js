import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const DetailBox = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.square}>{props.data}</Text>
        </View>
    );
}

const DetailPercentageBox = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.square}>% {props.data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
});

export default DetailBox;
export {DetailPercentageBox};