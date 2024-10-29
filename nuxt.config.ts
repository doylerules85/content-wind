export default defineNuxtConfig({
  extends: "content-wind",

  routeRules: {
    "/": { prerender: true },
  },
  modules: ["@nuxthq/studio"],
  compatibilityDate: "2024-10-29",
});
