import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapIcon, StarIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({ imageUri, restaurantName, rating, country }) => {
    return (
        <TouchableOpacity className="bg-gray-200 mr-2 rounded-lg" >
            <Image source={{ uri: imageUri }}

                className="w-[280px]  h-44  object-cover rounded-lg" />
            <View className="p-2">
                <Text className="font-bold text-xl ">{restaurantName}</Text>
                <View className="flex-row items-center gap-1">
                    <StarIcon color={"#01C1B2"} />
                    <Text className="text-primary text-sm">{rating}</Text>
                    <Text className="text-gray-400 text-xs">{"." + country}</Text>
                </View>
                <View className="">
                    <Text className="text-gray-400 text-xs">{"." + country}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard