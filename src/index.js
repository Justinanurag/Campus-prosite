import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// Fix doubled base path (e.g. /campus/campus) from misconfigured server redirects
const base = process.env.PUBLIC_URL || "";
if (base) {
  const doubled = `${base}${base}`;
  const { pathname, search, hash } = window.location;
  if (pathname === doubled || pathname.startsWith(`${doubled}/`)) {
    const fixed = pathname.replace(doubled, base) + search + hash;
    window.history.replaceState(null, "", fixed);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
