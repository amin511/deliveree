import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableHighlight } from 'react-native-web';
import { stack } from '../App';
import { useNavigation } from '@react-navigation/native';

const Course = ({ rating, time, description, source }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')} className="space-y-4 bg-w shadow-sm  w-60 p-3" >
            <Image source={source} />
            {/* description */}
            <View>
                <Text className="text-[#777777]">
                    {description}
                </Text>
            </View>
            {/* time and rating of course */}
            <View className="flex flex-row justify-between">
                {/* time */}
                <View className="flex items-center gap-1 flex-row" >
                    <Ionicons name="time-outline" size={24} color="black" />
                    <Text>{time}h</Text>
                </View>
                {/* rating */}
                <View className="flex flex-row gap-2 items-center">
                    <Image source={require("../assets/Star1.png")} />
                    <Text>
                        {rating}
                    </Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default Course