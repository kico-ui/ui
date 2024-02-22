import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { visit } from "unist-util-visit"

import { makeSource } from "contentlayer/source-files"
import ShadcnComponent from "./src/content/definations/shadcn-component"
import TailwindcssComponent from "./src/content/definations/tailwindcss-component"

const BLOCK =
  "overflow-hidden rounded-lg bg-rose-100/5 shadow-surface-elevation-low ring-1 ring-rose-100/[3%] ring-inset"
const TITLE =
  "mb-0.5 rounded-md bg-rose-100/10 px-3 py-1 font-mono text-xs text-rose-100/70 shadow-sm"
const PRE = "overflow-x-auto py-2 text-[13px] leading-6 [color-scheme:dark]"
const CODE =
  "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3"
const INLINE_BLOCK =
  "whitespace-nowrap border border-rose-200/10 px-1.5 py-px text-[12px] rounded-full bg-white/5 whitespace-nowrap text-rose-300/90"
const INLINE_CODE = ""
const NUMBERED_LINES =
  "[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-white/20 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]"
const HIGHLIGHTED_LINE = "highlighted-line"

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [ShadcnComponent, TailwindcssComponent],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          tokensMap: {
            fn: "entity.name.function",
            objKey: "meta.object-literal.key",
          },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
            node.properties.className = [""]
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push(HIGHLIGHTED_LINE)
          },
        },
      ],
      () => (tree) => {
        visit(
          tree,
          (node) =>
            Boolean(
              node.tagName === "code" &&
                Object.keys(node.properties).length === 0 &&
                node.children.some((n) => n.type === "text")
            ),
          (node) => {
            const textNode = node.children.find((n) => n.type === "text")
            textNode.type = "element"
            textNode.tagName = "code"
            textNode.properties = { className: [INLINE_CODE] }
            textNode.children = [{ type: "text", value: textNode.value }]
            node.properties.className = [INLINE_BLOCK]
            node.tagName = "span"
          }
        )

        visit(
          tree,
          (node) =>
            Boolean(
              typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
                "undefined"
            ),
          (node) => {
            if (node.tagName === "span") {
              node.properties.className = [
                ...(node.properties.className || []),
                INLINE_BLOCK,
              ]
              node.children[0].properties.className = [
                ...(node.children[0].properties.className || []),
                INLINE_CODE,
              ]

              return node
            }

            if (node.tagName === "div") {
              node.properties.className = [
                ...(node.properties.className || []),
                BLOCK,
              ]
              node.children = node.children.map((node) => {
                if (
                  node.tagName === "div" &&
                  typeof node.properties?.["data-rehype-pretty-code-title"] !==
                    "undefined"
                ) {
                  node.properties.className = [
                    ...(node.properties.className || []),
                    TITLE,
                  ]
                }
                if (node.tagName === "pre") {
                  node.properties.className = [PRE]
                  if (node.children[0].tagName === "code") {
                    node.children[0].properties.className = [
                      ...(node.children[0].properties.className || []),
                      CODE,
                    ]
                    if (
                      typeof node.children[0].properties[
                        "data-line-numbers"
                      ] !== "undefined"
                    ) {
                      node.children[0].properties.className.push(NUMBERED_LINES)
                    }
                  }
                }

                return node
              })

              return node
            }
          }
        )
      },
    ],
  },
})
