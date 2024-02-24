import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 10,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            className=" ">
            <CategoryCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} title={"cake"} />
            <CategoryCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} title={"cake"} />
            <CategoryCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} title={"cake"} />
            <CategoryCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} title={"cake"} />
            <CategoryCard imageUri={"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"} title={"cake"} />

        </ScrollView>
    )
}

export default Categories