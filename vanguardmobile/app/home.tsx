import React from 'react';
import { Text, View } from 'react-native';

import { defaultStyles } from './styles';

export class HomeView extends React.Component {
  render() {
    return (
      <View style={defaultStyles.view}>
        <Text style={defaultStyles.text}>News feed or whatever goes here.</Text>
      </View>
    );
  }
}