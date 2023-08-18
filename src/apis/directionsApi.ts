import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    language: "es",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1Ijoic2FtdXJhaW9yZGlhbGVzIiwiYSI6ImNsbGdvOWczaTE3ZXkzc21nazRpaHFyMXQifQ.-4qJHIQo6wBWJkkvHCMDwg",
  },
});

export default directionsApi;
