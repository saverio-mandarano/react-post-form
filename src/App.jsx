import { useState } from "react";

function App() {
  //creo var (oggetto) per la gestione dei dati del form, inizializzati vuoti
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  // creo funzione per aggiornare i valori del form
  function handleFormData(e) {
    // const value =
    //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // setFormData({
    //   ...formData,
    //   [e.target.name]: value,
    // });

    //destrutturazione oggetto event (e)
    const { type, name, value, checked } = e.target;

    const targetValue = type === "checkbox" ? checked : value;

    // setFormData({
    //   ...formData,
    //   [name]: targetValue,
    // });

    setFormData((prev) => ({
      ...prev,
      [name]: targetValue,
    }));
  }

  //var di stato per memorizzare post inviato
  const [post, setPost] = useState(null);

  //funziona di gestione invio del form
  function handleSubmit(e) {
    e.preventDefault();
    setPost(formData);
  }

  return (
    <>
      <header>
        <h1 className="py-3 text-center">Post Form</h1>
      </header>
      <main>
        <div className="container w-75">
          <form
            className="p-3 d-flex justify-content-center flex-column"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col d-flex justify-content-center">
                <input
                  type="text"
                  name="author"
                  placeholder="Autore del post..."
                  value={formData.author}
                  onChange={handleFormData}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Titolo del post..."
                  value={formData.title}
                  onChange={handleFormData}
                />

                <input
                  type="text"
                  name="body"
                  placeholder="Testo del post..."
                  value={formData.body}
                  onChange={handleFormData}
                />
              </div>
            </div>

            <div className="form-check ms-2 d-flex justify-content-center">
              <input
                id="publicInput"
                type="checkbox"
                name="public"
                className="form-check-input"
                checked={formData.public}
                onChange={handleFormData}
              />
              <label className="form-check-label" htmlFor="publicInput">
                Seleziona se il post deve essere pubblico
              </label>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary ">
                Crea post
              </button>
            </div>
          </form>
          {/* Renderizzo l'anteprima del post solo dopo che post viene creato */}
          {post && (
            <div className="card w-50 mx-auto">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <p className="card-author">Autore: {post.author}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
