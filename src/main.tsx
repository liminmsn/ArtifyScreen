import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "primereact/resources/themes/saga-green/theme.css";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
