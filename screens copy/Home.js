import { View, Text, SafeAreaView, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Course from '../components/Course';
import Courses from '../components/Courses';
const Home = () => {
    dataCourses1 = [
        {
            id: 1,
            description: "Sign language course for kids 4-7",
            rating: "4.9",
            time: "20",
            source: require("../assets/course1.png")
        },
        {
            id: 2,
            description: "Sign language course for theater",
            rating: "8",
            time: "4.7",
            source: require("../assets/course2.png")

        },
        {
            id: 3,
            description: "Sign language course for games and entertainement",
            rating: "4.7",
            time: "6",
            source: require("../assets/course3.png"),
        }
    ]
    dataCourses2 = [
        {
            id: 1,
            description: "Sign language course for kids 4-7",
            rating: "4.9",
            time: "20",
            source: require("../assets/course4.png")
        },
        {
            id: 2,
            description: "Sign language course for theater",
            rating: "8",
            time: "4.7",
            source: require("../assets/course5.png")

        },
        {
            id: 3,
            description: "Sign language course for games and entertainement",
            rating: "4.7",
            time: "6",
            source: require("../assets/course6.png"),
        }
    ]
    return (
        <SafeAreaView className="mt-3 mx-4"

        >
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className=" flex flex-row justify-between items-center">
                    <View className="items-center  flex  flex-row gap-5">
                        <Image source={require('../assets/logo2.jpg')} />
                        <View>
                            <Text className="font-bold text-lg">
                                Hi, Rachad
                            </Text>
                            <Text>Let's start learning</Text>
                        </View>
                    </View>
                    <Ionicons name="notifications-outline" size={30} color="black" />
                </View>
                <Text className="font-bold mt-6 text-xl">
                    What do you want to learn ?
                </Text>

                <View className="mt-4">
                    <TextInput className="p-2 bg-gray-200  " placeholder='Recherche' />
                </View>
                <Courses data={dataCourses1} title={"recommendation for kids"} />
                <Courses data={dataCourses2} title={"recommendation for adults"} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home