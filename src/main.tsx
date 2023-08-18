import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp.tsx";
import "./globals.css";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FtdXJhaW9yZGlhbGVzIiwiYSI6ImNsbGdvOWczaTE3ZXkzc21nazRpaHFyMXQifQ.-4qJHIQo6wBWJkkvHCMDwg";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolication");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
