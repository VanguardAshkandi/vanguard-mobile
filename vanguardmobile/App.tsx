import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { AppNavigator } from './app/nav';
import { loadFonts, DEFAULT_BG_COLOR } from './app/styles';

const AppContainer = createAppContainer(AppNavigator);

interface AppState {
  fontsLoaded: boolean
}

export default class App extends React.Component<{}, AppState> {
  state = {
    fontsLoaded: false
  }

  async componentDidMount() {
    await loadFonts();

    this.setState({ fontsLoaded: true });
  }

  render() {
    if(this.state.fontsLoaded) {
      return (
        <AppContainer style={{ flex: 1 }} />
      );
    } else {
      // Stub view
      return <View style={{ flex: 1, backgroundColor: DEFAULT_BG_COLOR }} />
    }
  }
}