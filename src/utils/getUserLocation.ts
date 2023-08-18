export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert("No se puede obtener la geolocalización");
        console.log(err);
        reject();
      }
    );
  });
};
