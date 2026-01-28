import { useState } from "react";

function App() {
  //creo var di stato per la gestione dei dati del form, inizializzati vuoti
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  // creo funzione per aggiornare i valori del form
  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  return (
    <>
      <header>
        <h1 className="py-3 text-center">Post Form</h1>
      </header>
      <main>
        <div className="container w-75">
          <form className="p-3">
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
          </form>
        </div>
      </main>
    </>
  );
}

export default App;

//
// I dati che il form dovrà inviare sono i seguenti:

// author (string) - L’autore del post
// title (string) - Il titolo del post
// body (string) - Il testo del post
// public (boolean) - Se il post deve essere pubblico (true) o una bozza (false) [checkbox]
