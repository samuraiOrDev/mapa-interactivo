import { useContext, useEffect, useRef } from "react";
import { Map } from "mapbox-gl";
import { MapContext, PlacesContext } from "../context";
import { Loading } from ".";

export const MapView = () => {
  const { userLocation, isLoading } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: "mapbox://styles/mapbox/streets-v12",
        center: userLocation,
        zoom: 14,
      });
      setMap(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      {userLocation?.join(",")}
    </div>
  );
};
