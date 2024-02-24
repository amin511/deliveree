import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import client from '../../sanity'

const FeaturedRow = ({ id, title, description }) => {
    // console.log(id, "id")
    // useEffect(() => {
    //     client.fetch(`
    //     *[_type=="featured" && _id ==$id]{
    //         ...,
    //         restaurants[]->{
    //             ...,
    //             dishes[]->{
    //                 type:"name"
    //             }
    //         },
    //     }[0]` , { id }).then(data => console.log("data.restaurants", data.restaurants))

    // }, [])
    return (
        <View className=" mx-4 my-3 ">
            <View className=" flex-row items-center space- ">
                <Text className=" font-bold text-xl flex-1">{title}</Text>
                <ArrowRightIcon size={30} color="#01C1B2" />
            </View>
            <Text className="text-sm text-gray-400">{description}</Text>
            <ScrollView

                horizontal
                contentContainerStyle={{

                    paddingTop: 10,
                }}
                showsHorizontalScrollIndicator={false}
                className="my-2"
            >
                <RestaurantCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} restaurantName={"roujji"} rating={"10"} country={"algeria"} />
                <RestaurantCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} restaurantName={"roujji"} rating={"10"} country={"algeria"} />
                <RestaurantCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} restaurantName={"roujji"} rating={"10"} country={"algeria"} />
            </ScrollView>

        </View>
    )
}

export default FeaturedRow