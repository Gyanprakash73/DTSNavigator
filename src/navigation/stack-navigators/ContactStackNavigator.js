import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ContactStackNavigator = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contact screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ScreenExternal')}
        style={{
          alignSelf: 'center',
          marginHorizontal: 50,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: 'blue',
        }}>
        <Text style={{fontSize: 25, color: '#fff'}}>
          OutSide Navigation Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactStackNavigator;

const styles = StyleSheet.create({});
