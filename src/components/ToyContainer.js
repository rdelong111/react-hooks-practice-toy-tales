import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete, onLike}) {
  const toyList = toys.map((toy) => (
    <ToyCard key={toy.id} toy={toy} onToyDelete={onToyDelete} onLike={onLike} />
  ))

  return (
    <div id="toy-collection">
      {toyList}
    </div>
  );
}

export default ToyContainer;
