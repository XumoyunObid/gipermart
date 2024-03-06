import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { clientQuery } from "./Config/query-client.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={clientQuery}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
