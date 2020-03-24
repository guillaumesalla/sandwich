import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Image, Alert, KeyboardAvoidingView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firebase from '../firebaseInit.js'
import '@firebase/firestore';

function lePain() {
    const ref = firebase.firestore().collection('pain');
    const [pain, setPain] = useState('');
    const [q, setQ] = useState('');

    const [pains, setPains] = useState([]);

    async function addPain() {
        await ref.add({
            name: pain,
            quantite: q,
        });
        setPain('');
        setQ('');
    }

    // async function getPain() {
    //     db.collection("pain")
    //         .doc(painId)
    //         .onSnapshot(doc => {
    //             const pains = [];
    //             doc.data().pains.forEach(pain => {
    //                 pains.push(pain);
    //             });
    //             setPains(pains);
    //         }
    //     }

    return (
        <View>
            <Appbar>
                <Appbar.Content title={'Petits bouts de pains'} />
            </Appbar>
            <TextInput label={'nom du pain'} value={pain} onChangeText={pain => setPain(pain)} />
            <TextInput label={'quantité'} value={q} onChangeText={q => setQ(q)} />
            <Button onPress={() => addPain()}>ajouter un petit bout de pain !</Button>
        </View>
    );
}
export default lePain