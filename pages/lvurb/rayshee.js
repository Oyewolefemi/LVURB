import styled from 'styled-components';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useRouter } from 'next/router';

const products = [
    { id: 1, name: 'Elegant Evening Dress', image: '/Rayshee/1.jpg', price: 12000, category: 'Featured', description: 'A perfect evening dress for luxurious occasions.' },
    { id: 2, name: 'Luxury Handbag', image: '/Rayshee/2.jpg', price: 8000, category: 'Featured', description: 'A stylish handbag for classy women.' },
    { id: 3, name: 'Designer Sunglasses', image: '/Rayshee/3.jpg', price: 5000, category: 'Best Sellers', description: 'Add a modern edge with these designer sunglasses.' },
    { id: 4, name: 'Silk Scarf', image: '/Rayshee/4.jpg', price: 3000, category: 'Best Sellers', description: 'Luxurious silk scarf to enhance any outfit.' },
    { id: 5, name: 'Gold Bracelet', image: '/Rayshee/5.jpg', price: 10000, category: 'New Arrivals', description: 'A delicate gold bracelet for timeless beauty.' },
    { id: 6, name: 'Perfume Gift Set', image: '/Rayshee/6.jpg', price: 15000, category: 'New Arrivals', description: 'A premium perfume set for special occasions.' },
];

const Rayshee = () => {
    const { cart, addToCart } = useContext(CartContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setSize('');
        setColor('');
    };

    const handleAddToCart = () => {
        if (!size || !color) {
            alert('Please fill out all fields');
            return;
        }
        addToCart({ ...selectedProduct, size, color });
        setSelectedProduct(null);
    };

    const handleProceedToCart = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push('/cart');
        }, 3000); // 3 seconds loader
    };

    return (
        <PageWrapper>
            <Header>
                <Title>Rayshee</Title>
                <CartButton onClick={handleProceedToCart}>
                    {loading ? <Loader /> : `Proceed to Cart (${cart.length})`}
                </CartButton>
            </Header>

            <HeroSection>
                <HeroContent>
                    <Title>Luxury Fashion Redefined</Title>
                    <Subtitle>Explore timeless elegance and contemporary style</Subtitle>
                </HeroContent>
            </HeroSection>

            <Section title="Featured Products" items={products.filter(p => p.category === 'Featured')} onProductClick={handleProductClick} />
            <Section title="Best Sellers" items={products.filter(p => p.category === 'Best Sellers')} onProductClick={handleProductClick} />
            <Section title="New Arrivals" items={products.filter(p => p.category === 'New Arrivals')} onProductClick={handleProductClick} />

            {selectedProduct && (
                <ProductModal>
                    <ModalContent>
                        <CloseButton onClick={() => setSelectedProduct(null)}>×</CloseButton>
                        <ProductImage src={selectedProduct.image} alt={selectedProduct.name} />
                        <ProductDetails>
                            <ProductName>{selectedProduct.name}</ProductName>
                            <ProductPrice>₦{selectedProduct.price.toLocaleString()}</ProductPrice>
                            <ProductDescription>{selectedProduct.description}</ProductDescription>
                            <Form>
                                <Label>
                                    Size:
                                    <Input
                                        type="text"
                                        value={size}
                                        placeholder="Enter size (e.g., Small, Medium, Large)"
                                        onChange={(e) => setSize(e.target.value)}
                                        required
                                    />
                                </Label>
                                <Label>
                                    Color:
                                    <Input
                                        type="text"
                                        value={color}
                                        placeholder="Enter color (e.g., Red, Blue, Black)"
                                        onChange={(e) => setColor(e.target.value)}
                                        required
                                    />
                                </Label>
                                <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
                            </Form>
                        </ProductDetails>
                    </ModalContent>
                </ProductModal>
            )}
        </PageWrapper>
    );
};

const Section = ({ title, items, onProductClick }) => (
    <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        <ProductsGrid>
            {items.map(item => (
                <ProductCard key={item.id} onClick={() => onProductClick(item)}>
                    <ProductImage src={item.image} alt={item.name} />
                    <ProductInfo>
                        <ProductName>{item.name}</ProductName>
                        <ProductPrice>₦{item.price.toLocaleString()}</ProductPrice>
                    </ProductInfo>
                </ProductCard>
            ))}
        </ProductsGrid>
    </SectionWrapper>
);

export default Rayshee;

// Styled Components
const PageWrapper = styled.div`
    background: linear-gradient(to right, #fff, #f8f8f8);
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
    font-size: 3rem;
    color: #000;
`;

const CartButton = styled.button`
    background-color: #000;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #333;
    }
`;

const Loader = styled.div`
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    border-top: 3px solid #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const HeroSection = styled.div`
    background-image: url('/Rayshee/hero.jpg');
    background-size: cover;
    background-position: center;
    padding: 80px 20px;
    text-align: center;
    color: #fff;
`;

const HeroContent = styled.div`
    background: rgba(255, 255, 255, 0.85);
    padding: 20px;
    border-radius: 10px;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: #555;
`;

const SectionWrapper = styled.section`
    padding: 20px 0;
`;

const SectionTitle = styled.h2`
    font-size: 2rem;
    margin: 40px 0 20px;
    color: #000;
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
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
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
    color: #000;
`;

const ProductModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
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

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
`;

const ProductDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin: 10px 0;
    line-height: 1.5;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
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

const AddToCartButton = styled.button`
    padding: 10px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #333;
    }
`;

