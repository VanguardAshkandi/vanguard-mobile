import React from 'react';
import { Text, View } from 'react-native';

import { defaultStyles } from './styles';

export class GPPView extends React.Component {
  render() {
    return (
      <View style={defaultStyles.view}>
        <Text style={defaultStyles.text}>This is the GPP view</Text>
      </View>
    );
  }
}
