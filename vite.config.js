import { defineConfig } from 'vitest/config'
import { resolve } from "path";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
  //  root: "src/",
  //  includeSource: ['src/**/*.{js,ts}'],
  },
 /*  resolve: {
    alias: {
      "$": resolve(__dirname, "src"),
    },
  }, */
})
