import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetailContainer = ({product}) => {
  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "30px"    
    }}>
        return(
            <Card key={product.id} style={{ width: '18rem', padding: "5px" }}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    </div>
  )
}

export default ItemDetailContainer