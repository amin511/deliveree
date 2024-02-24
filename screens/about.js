import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const About = ({ route, navigation }) => {
    const { itemId } = route.params;
    console.log(itemId)
    return (
        <View>
            <Text>about</Text>
            <Button
                title='Go back'
                onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default About

const styles = StyleSheet.create({})