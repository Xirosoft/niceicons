const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '', basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}



module.exports = nextConfig
