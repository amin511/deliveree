import { View, Text, SafeAreaView, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Course from '../components/Course';
import Coursess from '../components/Courses';
const dataCourses1 = [
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
const dataCourses2 = [
    {
        id: 4,
        description: "Sign language course for kids 4-7",
        rating: "4.9",
        time: "20",
        source: require("../assets/course4.png")
    },
    {
        id: 5,
        description: "Sign language course for theater",
        rating: "8",
        time: "4.7",
        source: require("../assets/course5.png")

    },
    {
        id: 6,
        description: "Sign language course for games and entertainement",
        rating: "4.7",
        time: "6",
        source: require("../assets/course6.png"),
    }
]
const Courses = () => {

    return (
        <>
            <SafeAreaView className="mt-10 mx-4">
                <Text className="text-2xl font-bold mx-auto">All courses</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Coursess data={dataCourses1} title={"recommendation for kids"} />
                    <Coursess data={dataCourses2} title={"recommendation for adults"} />
                </ScrollView>
            </SafeAreaView>

        </>

    )
}

export default Courses