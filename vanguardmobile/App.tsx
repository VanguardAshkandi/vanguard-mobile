import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeView } from './app/home';
import { GPPView } from './app/gpp';

const AppNavigator = createStackNavigator({
  home: HomeView,
  gpp: GPPView
},{
  initialRouteName: 'home',
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}