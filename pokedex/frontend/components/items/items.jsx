import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetail from './item_details';
import ItemDetailContainer from './items_detail_container';


const Item = ({ item }) => (
  <div>
    <Link to={`/pokemon/${item.pokemon_id}/items/${item.id}`}>
      <li className="item-display" > <img src={ item.image_url} /> </li>
    </Link>
  </div>

);

export default Item;
