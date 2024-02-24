import { View, Text, Image } from 'react-native'
import React from 'react'

const Details = () => {

    return (
        <View>
            <Image
                width={200} height={200}
                className="w-fill w-[100%] object-cover"

                source={require('../assets/course1.png')}

            />
        </View>
    )
}

export default Details