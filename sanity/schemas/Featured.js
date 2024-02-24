import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "Featured Category Name",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "short_description",
            title: "short description of the Featured category",
            type: "string",
            validation: (rule) => rule.required()
        },

        {
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{ type: "reference", to: [{ type: "restaurant" }] }]
        }
    ]
})
