// src/Component/list.js
import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <div key={person.id} className="person">
          <h4>{person.name}</h4>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </>
  );
};

export default List;
