/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.safetest.?(c|m)[jt]s?(x)"],
    inspect: process.env.CI ? false : true,
    outputFile: "results.json",
    poolOptions: { threads: { singleThread: true } },
    reporters: ["basic", "json"],
    setupFiles: ["setup-safetest"],
    testTimeout: 30000,
  },
});
