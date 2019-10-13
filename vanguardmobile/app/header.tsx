import React from 'react';
import { Image, View } from 'react-native';

const VG_IMG_HEIGHT = 64;
const VG_IMG_WIDTH = 256;

const hasNotch = (() => {
  return 
})()

export class Header extends React.Component {
  render() {
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image
          source={require('../assets/images/vanguard.png')}
          style={{
            width: VG_IMG_WIDTH,
            height: VG_IMG_HEIGHT
          }}
        />
      </View>
    );
  }
}
