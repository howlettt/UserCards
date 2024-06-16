/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.safetest.?(c|m)[jt]s?(x)"],
    inspect: process.env.CI ? false : true,
    poolOptions: { threads: { singleThread: true } },
    reporters: ["basic"],
    setupFiles: ["setup-safetest"],
    testTimeout: 30000,
  },
});
