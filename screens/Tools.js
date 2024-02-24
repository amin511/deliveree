import { View, Text, Image } from 'react-native'
import React from 'react'

const Tools = () => {
    return (
        <View>
            <Text className="font-bold mx-auto text-4xl my-4">Tools : </Text>
            <Image style={{ width: 400, height: 150 }} source={require('../assets/audio-text.png')} />
            <Image style={{
                width: 390, height: 150,
                marginTop: 40
            }} source={require('../assets/microphone.png')}></Image>
        </View>
    )
}

export default Tools