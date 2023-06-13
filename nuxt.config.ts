// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/axios",
  ],
  strapi: {
    url: "http://localhost:1337",
  },
  runtimeConfig: {
    public: {
      DATABASE_ID: process.env.NUXT_DATABASE_ID,
      COLLECTION_ID: process.env.NUXT_COLLECTION_ID,
      PROJECT_ID: process.env.NUXT_PROJECT_ID,
      API_ENDPOINT: process.env.NUXT_API_ENDPOINT,
    },
  },
});
