import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


const Home = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get('https://dummyjson.com/products')
        .then((res) => {setProducts(res.data.products);})
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemListContainer products={products}/>
        </div>
    )
};

export default Home;