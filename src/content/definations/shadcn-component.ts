import { defineDocumentType, defineNestedType } from "contentlayer/source-files"

const LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string",
    },
    api: {
      type: "string",
    },
  },
}))

const ShadcnComponent = defineDocumentType(() => ({
  name: "ShadcnComponent",
  filePathPattern: "shadcn/*.mdx",
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
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
    breadcrumb: {
      type: "string",
      required: true,
    },
    links: {
      type: "nested",
      of: LinksProperties,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (component) => component._raw.flattenedPath,
    },
  },
}))

export default ShadcnComponent
