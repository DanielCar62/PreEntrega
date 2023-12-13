import React from 'react';
import { useEffect, useState } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

const Home = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, "products");

        getDocs(collectionRef).then((res) => {
            const data = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(data);
        })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
           <h1>{greeting}</h1>
            <ItemListContainer products={products}/>
        </div>
    )
};

export default Home;