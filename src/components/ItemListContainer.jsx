import React from 'react'
import ItemList from './ItemList'
import Data from "./data.json"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {
  
  const {category} = useParams()
  
  const filtroCategoria = Data.filter((productos) => productos.categoria === category);
  
  return (
    <div>
      {category ? <ItemList productos={filtroCategoria}/> : <ItemList productos={Data}/>}
    </div>
  )
}

export default ItemListContainer