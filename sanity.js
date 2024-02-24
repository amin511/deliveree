import { createClient } from '@sanity/client'
const client = createClient({
    projectId: 'sr29dxzb',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})


export const UrlFor = (source) => builder.image(source)

export const getAllRestaurant = async () => {
    const restaurant = await client.fetch('*[_type == "restaurant"]');

    return restaurant
}
export const getAllFeatured = async () => {
    const Features = await client.fetch('*[_type == "featured"]');

    return Features
}
export default client;

