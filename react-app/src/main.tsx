import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./components/context/UserContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <UserProvider>
      <App />
    </UserProvider>
  );
} else {
  console.error(`Element with id "root" not found`);
}