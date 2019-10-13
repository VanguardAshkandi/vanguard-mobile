import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-navigation';

import { defaultStyles } from './styles';

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

    return (
      <View style={defaultStyles.view}>
        <Text style={defaultStyles.text}>{name}</Text>
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
