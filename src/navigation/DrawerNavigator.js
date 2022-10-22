import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator';
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#4f4f4f',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
          }}>
          <Text style={{color: '#fff'}}>Home</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={DrawerHeaderContent}>
      <Drawer.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home Screen',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'MyRewardsStackNavigator'}
        component={MyRewardsStackNavigator}
        options={{
          drawerLabel: 'My Rewards Screen',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="firewire" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'LocationsStackNavigator'}
        component={LocationsStackNavigator}
        options={{
          drawerLabel: 'Locations Screen',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="location-enter"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});

export default DrawerNavigator;
