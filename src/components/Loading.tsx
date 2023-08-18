export const Loading = () => {
  return (
    <div className="loading-map d-flex justify-content-center align-items-center flex-column">
      <div className="spinner-border text-light" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="text-center text-light">
        <h3>Localizando....</h3>
      </div>
    </div>
  );
};
