import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, changeToys] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((r) => r.json())
      .then((theToys) => {
        changeToys(theToys);
        setLoaded(true);
      })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleToySubmit(newToy) {
    changeToys([...toys, newToy]);
    setShowForm(false);
  }

  function handleDelete(ID) {
    const newList = toys.filter((toy) => toy.id !== ID);
    changeToys(newList);
  }

  function handleLike(updatedToy) {
    const updatedList = toys.map((toy) => {
      if (toy.id === updatedToy.id) return updatedToy;
      else return toy;
    });
    changeToys(updatedList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToySubmit={handleToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {isLoaded ? 
        <ToyContainer toys={toys} onToyDelete={handleDelete} onLike={handleLike} />
        :
        <h3>Loading...</h3>
      }
    </>
  );
}

export default App;
