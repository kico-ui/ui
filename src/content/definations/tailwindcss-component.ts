import { defineDocumentType } from "contentlayer/source-files"

const TailwindcssComponent = defineDocumentType(() => ({
  name: "TailwindcssComponent",
  filePathPattern: "tailwindcss/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (component) => component._raw.flattenedPath,
    },
  },
}))

export default TailwindcssComponent
