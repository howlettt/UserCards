import { setup } from "safetest/setup";

setup({
  bootstrappedAt: require.resolve("./src/main.tsx"),
  url: "http://localhost:5173/",
});
