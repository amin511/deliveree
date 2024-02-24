import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ArrowDownLeftIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';


const RestaurantScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View className="relative">
                <Image
                    className="w-full h-56 bg-gray-300 p-4"
                    source={{ uri: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" }} />
                <Text>
                    restaurant
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-3 bg-white rounded-full p-3">
                    <ArrowLeftIcon size={20} color="green" className=" bg-white rounded-full top-0" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RestaurantScreen

