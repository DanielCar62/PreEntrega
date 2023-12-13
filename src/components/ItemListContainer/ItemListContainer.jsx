import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemListContainer = ({products}) => {
    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "30px",
            textAlign: "center"    
        }}>
            {products.map((product) => {
                return(
                    <Card key={product.id} style={{ width: '18rem', padding: "5px" }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="primary"><Link style={{textDecoration: "none", color: "white"}} Go to={`/item/${product.id}`}>Ver detalles</Link></Button>
                        </Card.Body>
                    </Card>
                );
            })};
        </div>
    
    );
};

export default ItemListContainer;