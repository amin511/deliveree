import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Course from './Course'


const Courses = ({ data, title }) => {

    return (
        <View className="mt-10">
            <Text className="p-2 font-bold text-xl ">{title}</Text>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false} // This line hides the scroll indicator
            >

                {
                    data.map((course) => {
                        return (
                            <Course {...course} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Courses