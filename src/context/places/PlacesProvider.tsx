import { FC, useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../utils";
import { searchApi } from "../../apis";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingpPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingpPlaces: false,
  places: [],
};

interface PlacesProviderProps {
  children: React.ReactNode;
}
export const PlacesProvider: FC<PlacesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lnglt) =>
      dispatch({ type: "setUserLocation", payload: lnglt })
    );
  }, []);

  const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: "setPlaces", payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error("No hay ubicación del usuario");

    dispatch({ type: "setLoadingPlaces" });
    const response = await searchApi.get<PlacesResponse>(`/${query}`, {
      params: {
        proximity: state.userLocation.join(","),
        q: query,
      },
    });
    dispatch({ type: "setPlaces", payload: response.data.features });
    return response.data.features;
  };
  return (
    <PlacesContext.Provider value={{ ...state, searchPlacesByQuery }}>
      {children}
    </PlacesContext.Provider>
  );
};
