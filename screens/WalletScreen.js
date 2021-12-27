import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { PieChart, } from "react-native-chart-kit";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const pieContainerHeight = deviceHeight * 0.4;

const WalletScreen = ({ navigation }) => {

  const chartConfig = {
    backgroundColor: "#ffffff",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
  };

  const data = [
    {
      name: "Bitcoin",
      population: 0.7248,
      color: "#f4ab24",
    },
    {
      name: "Ethereum",
      population: 0.4248,
      color: "#636363",
    },
    {
      name: "Decentraland",
      population: 0.3248,
      color: "#f7545c",
    },
    {
      name: "Solana",
      population: 0.2248,
      color: "#bf25ea",
    },
    {
      name: "Neo",
      population: 0.348,
      color: "#4aefb8",
    },
    {
      name: "Dogecoin",
      population: 0.1248,
      color: "#b79d47",
    },
  ];

  return(
    <View>
      <View style={styles.pieContainer}>
        <PieChart
          style={styles.piechart}
          data={data}
          width={deviceWidth}
          height={300}
          chartConfig={chartConfig}
          hasLegend={false}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={15}
          center={[0, 0]}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={{flex: 1, flexDirection:'column', justifyContent: 'center'}}>
          <View style={styles.card}>
            <Text style={styles.orb, {color: "#f4ab24", fontSize: 50, marginTop: -16, marginLeft: 10, marginRight: 20}}>•</Text>
            <Text style={styles.label}>Bitcoin</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.orb, {color: "#636363", fontSize: 50, marginTop: -16, marginLeft: 10, marginRight: 20}}>•</Text>
            <Text style={styles.label}>Ethereum</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.orb, {color: "#f7545c", fontSize: 50, marginTop: -16, marginLeft: 10, marginRight: 20}}>•</Text>
            <Text style={styles.label}>Decentraland</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.orb, {color: "#bf25ea", fontSize: 50, marginTop: -16, marginLeft: 10, marginRight: 20}}>•</Text>
            <Text style={styles.label}>Solana</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.orb, {color: "#4aefb8", fontSize: 50, marginTop: -16, marginLeft: 10, marginRight: 20}}>•</Text>
            <Text style={styles.label}>Neo</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.orb, {color: "#b79d47", fontSize: 50, marginTop: -16, marginLeft: 10, marginRight: 20}}>•</Text>
            <Text style={styles.label}>Dogecoin</Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  piechart:{
    marginLeft: 50,
    paddingLeft: 45
  },
  infoContainer:{
    width: deviceWidth,
    // flex: 1,
    flexDirection: 'column',
    marginTop: 150,
    backgroundColor: 'red'
  },
  scrollView:{
    marginTop: 40,
    height: "55%",
    width:"100%",
  },
  card:{
    marginLeft: "15%",
    backgroundColor: 'white',
    width: "70%",
    height: 40,
    borderColor: "#00000050",
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  label:{
    alignSelf: "center",
  }
})

export default WalletScreen;