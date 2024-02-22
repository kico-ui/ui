import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
}

export default withContentlayer(nextConfig)
