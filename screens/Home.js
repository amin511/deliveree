import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView } from 'react-native'
import React, { Component, useLayoutEffect, useEffect, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/cateogories/Categories'
import CategoryCard from '../components/cateogories/CategoryCard'
import client, { getAllRestaurant, getAllFeatured } from '../sanity'
import FeaturedRow from '../components/Featured/FeaturedRow'
const Home = () => {

    const [featuredCategory, setFeaturedCategory] = useState([]);

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    useEffect(() => {

        const fetchFeaturedCategories = async () => {
            const Featured = await getAllFeatured();
            setFeaturedCategory(Featured);
            console.log(Featured);
        }
        fetchFeaturedCategories();

    }, [])
    return (

        <SafeAreaView className="flex-col  bg-white pt-5" >
            {/* header */}
            <View className="flex-row  w-full bg-white justify-between p-2 items-center gap-2">
                <Image source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className="flex-1">

                    <Text className="font-bold text-gray-400 text-xs" >Deliver Now!</Text>
                    <View className="flex-row items-center gap-1" >
                        <Text className="text-xl  font-bold p-" >Current Location</Text>
                        <View className="">
                            <ChevronDownIcon size={20} color={"#01C1B2"} />
                        </View>
                    </View>
                </View>
                <UserIcon color={"#01C1B2"} size={25} />
            </View>
            {/* Search  */}

            <View className=" mx-2 px-2 flex-row items-center  w-full  p-3">
                <View className=" flex-1 bg-gray-100 pb-2 flex-row  gap-2   ">
                    <UserIcon color="green" size={20} />
                    <TextInput
                        keyboardType='default'
                        placeholder='Restaurants and cuisines' />

                </View>
                <View className="pb-2 mx-2 ">
                    <AdjustmentsVerticalIcon size={30} color="#01C1B2" />
                </View>
            </View>

            {/* body */}
            <ScrollView
                className="bg-gray-100  ">
                <Categories />
                {
                    featuredCategory.map(element => {
                        return <FeaturedRow key={element._id} id={element._id} title={element.name} description={element.short_description} />
                    })
                }
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home