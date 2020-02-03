import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, Alert, KeyboardAvoidingView } from 'react-native';


export default class Ingredients extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", padding: 32 }}
                behavior="height"
                enabled
            >
                <Text style={{ textAlign: "center", fontSize: 28, marginBottom: 20 }}>
                    ingredients
                </Text>
            </KeyboardAvoidingView>
        )
    }
}