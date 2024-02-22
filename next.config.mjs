import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
  async redirects() {
    return [
      {
        source: "/components/tailwindcss",
        destination: "/components/tailwindcss/introduction",
        permanent: true,
      },
      {
        source: "/components/bootstrap",
        destination: "/components/bootstrap/introduction",
        permanent: true,
      },
      {
        source: "/components/shadcn",
        destination: "/components/shadcn/introduction",
        permanent: true,
      },
      {
        source: "/components/css",
        destination: "/components/css/introduction",
        permanent: true,
      },
      {
        source: "/components/ant-design",
        destination: "/components/ant-design/introduction",
        permanent: true,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
