import React from 'react';

const ItemDetail = ({ item }) => {
  return(
  <div>
    <h2> {item.name}</h2>
    <h3> {item.happiness} </h3>
    <h3> ${item.price} </h3>
  </div>
  );
};

export default ItemDetail;
