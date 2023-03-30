/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{ member }}'
    },
    '@mui/material': {
      transform: '@mui/material/{{ member }}'
    }
  }
}

module.exports = nextConfig
