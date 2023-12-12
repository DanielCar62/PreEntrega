import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc, getDocs, collection, query, where } from 'firebase/firestore';

const Category = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {categoryId} = useParams();

    useEffect(() => {
      const db = getFirestore();
      const collectionRef = collection(db, "products");

      const categoryQuery = query(collectionRef, where("category", "==", categoryId))

      getDocs(categoryQuery).then((res) => {
        const data = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setProducts(data);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));

    }, [categoryId]);

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemListContainer products={products}/>
    </div>
  )
}

export default Category