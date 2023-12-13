import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {
    
    const {itemCount} = React.useContext(CartContext);
    
    return(
        <div>
            <BsCart2 size={27}/>
            <span>{itemCount}</span>
        </div>
    );
};

export default CartWidgetComponent;