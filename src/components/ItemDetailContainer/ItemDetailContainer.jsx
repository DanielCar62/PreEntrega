import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const ItemDetailContainer = ({product}) => {
  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "30px"    
    }}>
        
        <Card key={product.id} style={{ width: '18rem', padding: "5px" }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <ItemQuantitySelector />
        </Card>    
    </div>
  )
}

export default ItemDetailContainer