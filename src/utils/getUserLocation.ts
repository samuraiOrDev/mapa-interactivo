export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.latitude, coords.latitude]);
      },
      (err) => {
        alert("No se puede obtener la geolocalización");
        console.log(err);
        reject();
      }
    );
  });
};
