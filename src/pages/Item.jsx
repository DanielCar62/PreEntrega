import React, { useEffect, useState } from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const Item = ({greeting}) => {
    
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {id} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "products", id);
  
    getDoc(docRef)
    .then((res) => {
      setProduct({id: res.id, ...res.data()})
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
  
  }, []);
      
  return (
    <div>
        <h1>{greeting}</h1> 
        <ItemDetailContainer product={product}/>
    </div>
  )
};
export default Item