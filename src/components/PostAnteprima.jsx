export default function PostAnteprima({ formDataProp }) {
  return (
    <>
      //{" "}
      {/* Renderizzo l'anteprima del post mentre digito dentro i campi input */}
      {formDataProp.title || formDataProp.body || formDataProp.author ? (
        <div className="card w-50 mx-auto mb-5">
          <div className="card-header">
            <h2 className="card-title">{formDataProp.title}</h2>
          </div>
          <div className="card-body">
            <p className="card-text">{formDataProp.body}</p>
            <p className="card-author">{formDataProp.author}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
