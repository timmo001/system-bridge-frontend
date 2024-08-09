/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  eslint: {
    // ESLint is disabled during builds to avoid slowing down the build process.
    ignoreDuringBuilds: true,
  },

};

export default config;
