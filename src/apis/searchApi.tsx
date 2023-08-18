import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6/forward?q",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1Ijoic2FtdXJhaW9yZGlhbGVzIiwiYSI6ImNsbGdvOWczaTE3ZXkzc21nazRpaHFyMXQifQ.-4qJHIQo6wBWJkkvHCMDwg",
  },
});

export default searchApi;
