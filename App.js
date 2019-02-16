import React from 'react';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import tabScreen01 from './screen/tabScreen01';
import tabScreen02 from './screen/tabScreen02';
import tabScreen03 from './screen/tabScreen03';


const App = createBottomTabNavigator({
    tab01: {
      screen: tabScreen01,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon size={27} name="file-text-o" color={tintColor} />
      }
    },
    tab02: {
      screen: tabScreen02,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon size={27} name="user" color={tintColor} />
      }
    },
    tab03: {
      screen: tabScreen03,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon size={27} name="gears" color={tintColor} />
      }
    },
},{
  initialRouteName: 'tab01',
  tabBarOptions:{
    activeTintColor: '#ffffff',
    activeBackgroundColor: '#333366',
    inactiveBackgroundColor: '#ffffff',
  },
});


export default createAppContainer(App);


