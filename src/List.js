import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((item) => {
        return (
          <article key={item.id} className="person">
            <img src={item.image} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
