// pages/cart.js
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartWrapper>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <CartItem key={item.id}>
                            <CartImage src={item.image} alt={item.name} />
                            <CartDetails>
                                <CartName>{item.name}</CartName>
                                <CartPrice>₦{item.price.toLocaleString()}</CartPrice>
                                <QuantitySelector
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />
                                <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
                            </CartDetails>
                        </CartItem>
                    ))}
                    <Total>Total: ₦{totalPrice.toLocaleString()}</Total>
                    <CheckoutButton>Proceed to Checkout</CheckoutButton>
                </>
            )}
        </CartWrapper>
    );
};

export default Cart;

// Styled Components
const CartWrapper = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Cinzel', serif;
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const CartImage = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 15px;
`;

const CartDetails = styled.div`
    flex-grow: 1;
`;

const CartName = styled.p`
    font-size: 1rem;
    font-weight: bold;
`;

const CartPrice = styled.p`
    color: #b22222;
`;

const QuantitySelector = styled.input`
    width: 50px;
`;

const RemoveButton = styled.button`
    background-color: #b22222;
    color: white;
    padding: 5px 10px;
`;

const Total = styled.h2`
    text-align: right;
    color: #b22222;
    margin-top: 20px;
`;

const CheckoutButton = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #4b0082;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
`;
