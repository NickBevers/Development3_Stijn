import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CardView from 'react-native-rn-cardview'


const TestScreen = ({ navigation }) =>  {
    return (
        <CardView cardElevation={4}
                    maxCardElevation={4}
                    radius={10}
                    backgroundColor={'#ffffff'}>
            <View style={{padding:10}}>
                <View>
                    <Text>ReactNative CardView for iOS and Android</Text>
                </View>
                <View>
                    <Text>This is test</Text>
                </View>
            </View>
        </CardView>
    );
}

export default TestScreen;