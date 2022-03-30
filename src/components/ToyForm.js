import React, {useState} from "react";

function ToyForm({onToySubmit}) {
  const [formData, changeData] = useState({
    name: '',
    image: '',
    likes: 0
  });

  function handleFormChange(e) {
    changeData({...formData, [e.target.name]: e.target.value});
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((newToy) => onToySubmit(newToy));
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
