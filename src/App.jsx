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
      <h1 className="py-3 text-center">Post Form</h1>
      <form className="p-3">
        <input
          type="text"
          name="author"
          placeholder="Autore"
          value={formData.author}
          onChange={handleFormData}
        />
      </form>
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
