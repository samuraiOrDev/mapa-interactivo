import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const [activePlaceId, setActivePlaceId] = useState("");
  const { places, isLoadingpPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  if (isLoadingpPlaces) {
    return (
      <div className="alert alert-primary mt-2">
        <h6>Buscando</h6>
        <p>Espere por favor</p>
      </div>
    );
  }
  if (places.length === 0) {
    return <></>;
  }

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.geometry.coordinates;
    setActivePlaceId(place.id);
    map?.flyTo({
      zoom: 9,
      center: [lng, lat],
    });
  };
  const getRoutes = async (place: Feature) => {
    console.log("GetRoutes", userLocation);
    if (!userLocation) return;
    const [lng, lat] = place.geometry.coordinates;
    await getRouteBetweenPoints(userLocation, [lng, lat]);
  };
  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          className={`${
            activePlaceId === place.id ? "active" : ""
          }  list-group-item list-group-item-action pointer`}
          key={place.id}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.properties.place_formatted}</h6>
          <p style={{ fontSize: "12px" }}>{place.properties.name}</p>
          <button
            className={`btn ${
              activePlaceId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }  btn-sm`}
            onClick={() => getRoutes(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
