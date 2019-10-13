import React from 'react';

import { SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Header } from './header';
import { HomeView } from './home';
import { GPPView } from './gpp';

import { DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR, DEFAULT_HIGHLIGHT_COLOR } from './styles';

const HomeTab = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_BG_COLOR }}>
      <Header />
      <HomeView />
    </SafeAreaView>
  );
}

const GPPTab = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_BG_COLOR }}>
      <Header />
      <GPPView />
    </SafeAreaView>
  );
};

export const AppNavigator = createBottomTabNavigator({
  home: {
    screen: HomeTab,
    navigationOptions: {
      title: 'HOME'
    }
  },
  gpp: {
    screen: GPPTab,
    navigationOptions: {
      title: 'GPP'
    }
  }
},{
  initialRouteName: 'home',
  tabBarOptions: {
    style: {
      backgroundColor: DEFAULT_BG_COLOR,
    },
    showIcon: false,
    labelStyle: {
      backgroundColor: DEFAULT_BG_COLOR,
      color: DEFAULT_TEXT_COLOR,
      fontSize: 18,
      fontWeight: '700'
    },
    tabStyle: {
      backgroundColor: DEFAULT_BG_COLOR
    },
    activeTintColor: DEFAULT_HIGHLIGHT_COLOR,
    activeBackgroundColor: DEFAULT_BG_COLOR,
    inactiveTintColor: DEFAULT_BG_COLOR,
    inactiveBackgroundColor: DEFAULT_BG_COLOR,
    keyboardHidesTabBar: true
  }
})