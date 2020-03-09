import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Image, Alert, KeyboardAvoidingView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firebase from '../firebaseInit.js'
import '@firebase/firestore';

function lePain() {
    const [pain, setPain] = useState('');
    const ref = firebase.firestore().collection('pain');
    async function addPain() {
        await ref.add({
            name: pain,
        });
        setPain('');
    }
    return (
        <View>
            <Appbar>
                <Appbar.Content title={'Petits bouts de pains'} />
            </Appbar>
            <ScrollView style={{ flex: 1 }}>
                <Text>Liste de pains </Text>
            </ScrollView>
            <TextInput label={'New pain'} value={pain} onChangeText={setPain} />
            <Button onPress={() => addPain()}>ajouter un petit bout de pain !</Button>
        </View>
    );
}
export default lePain