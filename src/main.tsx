import React from "react";
import ReactDOM from "react-dom/client";
import { bootstrap } from "safetest/react";
import App from "./App.tsx";

const container = document.getElementById("root")!;
const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const isDev = process.env.NODE_ENV !== "production";

bootstrap({
  element,
  render: (element) => {
    ReactDOM.createRoot(container).render(element);
  },
  importGlob: isDev && import.meta.glob("./**/*.safetest.{j,t}s{,x}"),
}).catch(() => {
  // TODO log error
});
