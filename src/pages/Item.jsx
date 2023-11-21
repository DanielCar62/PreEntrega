import React, { useEffect, useState } from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Item = ({greeting}) => {
    const [product, setProduct] = useState({});
    const {id} = useParams()
    
    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {setProduct(res.data);})
        .catch((error) => console.log(error));
    }, [id]);
  return (
    <div>
        <h1>{greeting}</h1> 
        <ItemDetailContainer product={product}/>
    </div>
  )
}

export default Item