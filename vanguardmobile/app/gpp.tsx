import React from 'react';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import { FlatList } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

import { DEFAULT_BG_COLOR, defaultStyles, wowClasses } from './styles';

interface GPPDatum {
  name: string
  gpp: number
  wowClass: string
}

const fakeGPP: GPPDatum[] = [{
  name: "Cosmic",
  gpp: 1000,
  wowClass: "mage"
},{
  name: "Zapdos",
  gpp: -500,
  wowClass: "hunter"
},{
  name: "Marisa",
  gpp: Number.POSITIVE_INFINITY,
  wowClass: "warrior"
},{
  name: "Depriest",
  gpp: 50,
  wowClass: "priest"
},{
  name: "Justwand",
  gpp: 50,
  wowClass: "warlock"
},{
  name: "Treeheals",
  gpp: -50,
  wowClass: "druid"
},{
  name: "Lightsaber",
  gpp: 50,
  wowClass: "paladin"
},{
  name: "Keiana",
  gpp: 50,
  wowClass: "rogue"
},{
  name: "Defector",
  gpp: 0,
  wowClass: "shaman"
}];

interface GPPListItemProps {
  item: GPPDatum
}

class GPPListItem extends React.Component<GPPListItemProps, {}> {
  render() {
    const { name, gpp, wowClass } = this.props.item;
    const classStyles = wowClasses[wowClass];

    const iconStyles = {
      
    };

    const nameStyles: TextStyle = {...defaultStyles.text, ...{
      display: 'flex',
      fontFamily: 'rubik-bold',
      fontSize: 22,
      paddingLeft: 10
    }};

    const gppStyles: TextStyle = {...defaultStyles.text, ...{
      display: 'flex',
      fontSize: 22,
      fontFamily: 'rubik-bold',
      flexGrow: 1,
      textAlign: "right"
    }};

    const viewStyles: ViewStyle = {...defaultStyles.view, ...{
      padding: 5,
      paddingRight: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }}

    const gradientStyles: ViewStyle = {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // Hack to fit this to icon height
      height: 64,
      // Hack to side gradient under the beveled edges of the class icons
      marginLeft: -5,
      zIndex: -1
    }

    const gradientOpacity = .5;

    return (
      <View style={viewStyles}>
        {classStyles.icon}
        <LinearGradient
          colors={[classStyles.bgColorRGBA(gradientOpacity), DEFAULT_BG_COLOR]}
          style={gradientStyles}
          start={[0, 0]}
          end={[1, 0]}
        >
          <Text style={nameStyles}>{name}</Text>
          <Text style={gppStyles}>{gpp}</Text>
        </LinearGradient>
      </View>
    );
  }
}

export class GPPView extends React.Component {
  renderItem({item}) {
    return <GPPListItem item={item} />
  }

  render() {
    return (
      <View style={defaultStyles.view}>
        <FlatList
          style={{ flex: 1 }}
          data={fakeGPP}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
