// pages/lvurb/niffy.js
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

const products = [
    { id: 1, name: 'Festive Graphic Shirt', image: '/Niffy/3.jpg', price: 5000, category: 'Featured' },
    { id: 2, name: 'Handcrafted Sweater', image: '/Niffy/6.jpg', price: 8000, category: 'Featured' },
    { id: 3, name: 'Christmas Knit Sweater', image: '/Niffy/9.jpg', price: 7000, category: 'Best Sellers' },
    { id: 4, name: 'Hand-painted Scarf', image: '/Niffy/8.jpg', price: 4000, category: 'Best Sellers' },
    { id: 5, name: 'Graphic T-Shirt', image: '/Niffy/4.jpg', price: 3000, category: 'New Arrivals' },
    { id: 6, name: 'Knitted Beanie', image: '/Niffy/7.jpg', price: 2500, category: 'New Arrivals' },
];

const HandmadeByNiffy = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleProceedToPayment = () => {
        setIsCartOpen(false);
        setIsFormOpen(true);
    };

    return (
        <PageWrapper>
            <Header>
                <Title>Handmade by Niffy</Title>
                <CartIconContainer onClick={() => setIsCartOpen(true)}>
                    <CartIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M7 4V2a2 2 0 1 1 4 0v2h2V2a2 2 0 1 1 4 0v2h3v2h-1l-2.5 13H6.5L4 6H3V4h4zm1.1 14h9.8l2-11H6.1l2 11zM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                            fill="currentColor"
                        />
                    </CartIcon>
                    <CartCount>{cart.reduce((total, item) => total + item.quantity, 0)}</CartCount>
                </CartIconContainer>
            </Header>

            <HeroSection>
                <HeroContent>
                    <Subtitle>Artisan-crafted fashion for the modern WOMAN</Subtitle>
                </HeroContent>
            </HeroSection>

            <Section title="Featured Products" items={products.filter(p => p.category === 'Featured')} />
            <Section title="Best Sellers" items={products.filter(p => p.category === 'Best Sellers')} />
            <Section title="New Arrivals" items={products.filter(p => p.category === 'New Arrivals')} />

            {isCartOpen && (
                <CartModal>
                    <ModalContent>
                        <CloseButton onClick={() => setIsCartOpen(false)}>×</CloseButton>
                        <CartTitle>Your Cart</CartTitle>
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
                                        </CartDetails>
                                    </CartItem>
                                ))}
                                <TotalAmount>Total: ₦{totalAmount.toLocaleString()}</TotalAmount>
                                <CartActions>
                                    <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
                                    <ProceedButton onClick={handleProceedToPayment}>Proceed to Payment</ProceedButton>
                                </CartActions>
                            </>
                        )}
                    </ModalContent>
                </CartModal>
            )}

            {isFormOpen && (
                <FormModal>
                    <ModalContent>
                        <CloseButton onClick={() => setIsFormOpen(false)}>×</CloseButton>
                        <FormTitle>Delivery Details</FormTitle>
                        <Form>
                            <Label>
                                Full Name
                                <Input type="text" placeholder="Enter your full name" required />
                            </Label>
                            <Label>
                                Address
                                <Input type="text" placeholder="Enter your address" required />
                            </Label>
                            <Label>
                                Phone Number
                                <Input type="tel" placeholder="Enter your phone number" required />
                            </Label>
                            <Label>
                                Is this a gift?
                                <Checkbox type="checkbox" id="gift" />
                            </Label>
                            <Label htmlFor="message">
                                Gift Message (optional)
                                <Textarea id="message" rows="3" placeholder="Add a message for the recipient" />
                            </Label>
                            <SubmitButton>Proceed to Payment</SubmitButton>
                        </Form>
                    </ModalContent>
                </FormModal>
            )}
        </PageWrapper>
    );
};

export default HandmadeByNiffy;

// Section Component
const Section = ({ title, items }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <SectionWrapper>
            <SectionTitle>{title}</SectionTitle>
            <ProductsGrid>
                {items.map(item => (
                    <ProductCard key={item.id}>
                        <ProductImage src={item.image} alt={item.name} />
                        <ProductInfo>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>₦{item.price.toLocaleString()}</ProductPrice>
                            <AddToCartButton onClick={() => addToCart(item)}>
                                Add to Cart
                            </AddToCartButton>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductsGrid>
        </SectionWrapper>
    );
};

// Styled Components
const PageWrapper = styled.div`
    background: #ffffff;
    color: #333;
    padding: 20px;
    font-family: 'Cinzel', serif;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #b22222;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartIcon = styled.svg`
    width: 30px;
    height: 30px;
    fill: #333;
`;

const CartCount = styled.span`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #b22222;
    color: white;
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 50%;
`;

const HeroSection = styled.div`
    background-image: url('/path/to/hero-image.jpg');
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
    text-align: center;
    color: #fff;
`;

const HeroContent = styled.div`
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 8px;
`;

const Subtitle = styled.h2`
    font-size: 1.2rem;
    color: #4b0082;
`;

const SectionWrapper = styled.section`
    padding: 20px 0;
`;

const SectionTitle = styled.h2`
    font-size: 2rem;
    margin: 40px 0 20px;
    color: #b22222;
    text-align: center;
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
`;

const ProductCard = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

const ProductInfo = styled.div`
    padding: 10px;
    text-align: center;
`;

const ProductName = styled.p`
    font-size: 1rem;
`;

const ProductPrice = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: #b22222;
`;

const AddToCartButton = styled.button`
    padding: 8px 16px;
    background-color: #4b0082;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #333;
    }
`;

const CartModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

const CartTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const CartImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

const CartDetails = styled.div`
    text-align: left;
`;

const CartName = styled.p`
    margin: 0;
`;

const CartPrice = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: #b22222;
`;

const TotalAmount = styled.h3`
    margin-top: 15px;
    text-align: right;
`;

const CartActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const ClearCartButton = styled.button`
    background-color: #b22222;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #8b0000;
    }
`;

const ProceedButton = styled.button`
    background-color: #4b0082;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #333;
    }
`;

const FormModal = styled(CartModal)``;

const FormTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Checkbox = styled.input``;

const Textarea = styled.textarea`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    background-color: #4b0082;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #333;
    }
`;
