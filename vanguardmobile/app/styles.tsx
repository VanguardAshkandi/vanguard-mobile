import { Image, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import * as Font from 'expo-font';

export interface IViewStyles {
  view: ViewStyle,
  text: TextStyle
};

export const DEFAULT_TEXT_COLOR = '#ddd';
export const DEFAULT_BG_COLOR = '#000'
export const DEFAULT_HIGHLIGHT_COLOR = '#ccc';
export const DEFAULT_FONT_FAMILY = 'rubik-regular';

export function loadFonts() {
  return Font.loadAsync({
    'rubik-black': require('../assets/fonts/Rubik-Black.ttf'),
    'rubik-black-italic': require('../assets/fonts/Rubik-BlackItalic.ttf'),
    'rubik-bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'rubik-bold-italic': require('../assets/fonts/Rubik-BoldItalic.ttf'),
    'rubik-italic': require('../assets/fonts/Rubik-Italic.ttf'),
    'rubik-light': require('../assets/fonts/Rubik-Light.ttf'),
    'rubik-light-italic': require('../assets/fonts/Rubik-LightItalic.ttf'),
    'rubik-medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'rubik-medium-italic': require('../assets/fonts/Rubik-MediumItalic.ttf'),
    'rubik-regular': require('../assets/fonts/Rubik-Regular.ttf'),
  });
};

const CLASS_ICON_HEIGHT = 64;
const CLASS_ICON_WIDTH = 64;

function ClassIconImage(source) {
  return (<Image
    source={source}
    style={{
      width: CLASS_ICON_WIDTH,
      height: CLASS_ICON_HEIGHT
    }}
  />);
}

export const wowClasses = {
  druid: {
    icon: <ClassIconImage source={require('../assets/class_icons/druid.png')} />,
    bgColor: '#FF7D0A'
  },
  hunter: {
    icon: <ClassIconImage source={require('../assets/class_icons/hunter.png')} />,
    bgColor: '#A9D271'
  },
  mage: {
    icon: <ClassIconImage source={require('../assets/class_icons/mage.png')} />,
    bgColor: '#40C7EB'
  },
  paladin: {
    icon: <ClassIconImage source={require('../assets/class_icons/paladin.png')} />,
    bgColor: '#F58CBA'
  },
  priest: {
    icon: <ClassIconImage source={require('../assets/class_icons/priest.png')} />,
    bgColor: '#FFFFFF'
  },
  rogue: {
    icon: <ClassIconImage source={require('../assets/class_icons/rogue.png')} />,
    bgColor: '#FFF569'
  },
  shaman: {
    icon: <ClassIconImage source={require('../assets/class_icons/shaman.png')} />,
    bgColor: '#0070DE'
  },
  warlock: {
    icon: <ClassIconImage source={require('../assets/class_icons/warlock.png')} />,
    bgColor: '#8787ED'
  },
  warrior: {
    icon: <ClassIconImage source={require('../assets/class_icons/warrior.png')} />,
    bgColor: '#C79C6E'
  }
};

export const defaultStyles = StyleSheet.create<IViewStyles>({
  view: {
    flex: 1,
    backgroundColor: DEFAULT_BG_COLOR,
    color: DEFAULT_TEXT_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: DEFAULT_FONT_FAMILY
  },
  text: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: DEFAULT_FONT_FAMILY
  }
});
