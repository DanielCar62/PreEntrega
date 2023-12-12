import React from 'react'
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/CartContext";

const AddItemButton = ({label = "Agregar al carrito", quantity, handleResetQuantity}) => {

  const {itemCount, setItemCount} = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  }

  return (
    <div>
        <Button onClick={handleAddCart}>{label}</Button>
    </div>
  )
}

export default AddItemButton