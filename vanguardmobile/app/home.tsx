import React from 'react';
import { Text, View } from 'react-native';

import { defaultStyles } from './styles';

export class HomeView extends React.Component {
  render() {
    return (
      <View style={defaultStyles.view}>
        <Text style={defaultStyles.text}>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}