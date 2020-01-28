import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native';


export default class Fromage extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{    alignItems: 'center',
    justifyContent: 'center',}}>
        <Text style={styles.texte}>
          voici un petit bout de fromage
        </Text>
<Image style={styles.logo} source={ 
{uri:'https://www.gresard.fr/upload/160913_173057_PEEL_GmtjfvYW.jpg'}} />
<Image style={styles.logo} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/NCI_swiss_cheese.jpg/220px-NCI_swiss_cheese.jpg'}} />
<Image style={styles.logo} source={{uri:'https://tutto.co.ke/wp-content/uploads/2019/03/Cheddar.jpg'}} />
<Image style={styles.logo} source={{uri:'https://assets.afcdn.com/story/20190219/1333694_w980h638c1cx2304cy1536.jpg'}} />


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFE51'
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