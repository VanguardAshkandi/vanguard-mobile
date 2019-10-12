import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface IViewStyles {
  view: ViewStyle,
  text: TextStyle
}

const defaultTextColor = '#ddd';

export const defaultStyles = StyleSheet.create<IViewStyles>({
  view: {
    flex: 1,
    backgroundColor: '#000',
    color: defaultTextColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: defaultTextColor
  }
});