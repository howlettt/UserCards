import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";

export default defineConfig((configEnv) => ({
  plugins: [
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [
        new EsLinter({
          configEnv: configEnv,
          serveOptions: { clearCacheOnStart: true },
        }),
        new TypeScriptLinter(),
      ],
      build: {
        includeMode: "filesInFolder",
      },
    }),
    react(),
  ],
}));
