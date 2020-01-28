import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native';
import Constants from 'expo-constants';


export default class AssetExample extends React.Component {
  render() {
  return (

<ScrollView style={styles.container} contentContainerStyle={{    alignItems: 'center',
    justifyContent: 'center',}}>
        <Text style={styles.texte}>
          voici un petit bout de pain
        </Text>
  <Image style={styles.logo} source={{uri:'https://cdn.lacuisinedannie.com/images/953.jpg'}} />
  <Image style={styles.logo} source={{uri:'https://www.pourquoidocteur.fr/media/article/thunbs/uploded_istock-154198929-1535112067.jpg'}} />
  <Image style={styles.logo} source={{uri:'http://www.toufletboulanger.fr/wp-content/uploads/2019/08/pain-levain.jpg'}} />
  <Image style={styles.logo} source={{uri:'http://a51.idata.over-blog.com/2/91/31/92/FOTOS-2/FOTOS-2P1912.jpg'}} />

 
</ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A68017',
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
