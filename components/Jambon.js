import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native';


export default class Jambon extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{    alignItems: 'center',
    justifyContent: 'center',}}>
        <Text style={styles.texte}>
          voici un petit bout de jambon
        </Text>
<Image style={styles.logo} source={ 
{uri:'https://produit-fermier-hemengo.com/385-large_default/jambon-de-bayonne-igp-entier-a-l-os.jpg'}} />
<Image style={styles.logo} source={{uri:'https://www.produits-de-nouvelle-aquitaine.fr/uploads/2019/01/Rozenbaum-Jambon.jpg'}} />
<Image style={styles.logo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/19/Jambon_blanc.jpg'}} />
<Image style={styles.logo} source={{uri:'http://www.restomarket.fr/12304-13106-large/jambon-blanc-cuit-tranche-broceliande-francais-1-kg.jpg'}} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE51ED'
  },
  logo: {
    height: 200,
    width: 200,
  },
    texte: {
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
  },
});
