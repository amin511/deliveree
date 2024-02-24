import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resataurant name",
      validation: (role) => role.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "short_description",
      type: "string",
      title: "ENter a rating between [1 - 5]",
      validation: (role) => role.max(200),
    },
    {
      name: "rating",
      type: "number",
      title: "restaurant rating",
      validation: (role) => role.required().min(1).max(5).error("Please enter a value between q and 5"),
    },

    {
      name: "address",
      type: "string",
      title: "restaurant address",
      validation: (role) => role.required(),
    },
    {
      name: "Long",
      type: "number",
      title: "longitude of the restaurant",
      validation: (role) => role.required(),
    },
    {
      name: "type",
      title: "Category",
      validation: (rule) => rule.required(),
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    }
  ]
})
