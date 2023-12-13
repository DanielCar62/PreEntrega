import React from 'react'
import Button from 'react-bootstrap/Button';
import AddItemButton from '../AddItemButton/AddItemButton';

const ItemQuantitySelector = () => {

  const [quantity, setQuantity] = React.useState(1);

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  }
  
  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleResetQuantity = () => {
    setQuantity(1);
  }

  return (
    <div style={{textAlign:"center"}}>
        <Button onClick={handleSubstractProduct}> - </Button>
        <input style={{textAlign:"center"}} type="number" value={quantity} disabled/>
        <Button onClick={handleAddProduct}> + </Button>
        <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
    </div>
  )
}

export default ItemQuantitySelector