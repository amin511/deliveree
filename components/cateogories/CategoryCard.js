import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({ imageUri, title }) => {


    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('RestaurantScreen')} className="mx-1 " >
            <Image source={{ uri: imageUri }}
                width={35}
                height={35}
                className="w-24 h-24 object-cover rounded" />
            <Text className="mx-auto font-bold text-sm  text-gray-700 " > {title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard