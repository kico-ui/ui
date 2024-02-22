import { makeSource } from "contentlayer/source-files"
import ShadcnComponent from "./src/content/definations/shadcn-component"
import TailwindcssComponent from "./src/content/definations/tailwindcss-component"

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [ShadcnComponent, TailwindcssComponent],
})
