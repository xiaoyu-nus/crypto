// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  strapi: {
    url: "http://localhost:1337",
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://localhost:1337",
    },
  },
});
