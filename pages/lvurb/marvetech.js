// pages/lvurb/marvetech.js
import styled from 'styled-components';
import Link from 'next/link';

// Sample product data
const products = [
    { id: 1, name: 'Smartphone X', image: '/marvetech/smartphone.jpg', category: 'New Gadgets' },
    { id: 2, name: '4K Drone', image: '/marvetech/drone.jpg', category: 'New Gadgets' },
    { id: 3, name: 'Laptop Pro', image: '/marvetech/laptop.jpg', category: 'New Gadgets' },
    { id: 4, name: 'Gaming Console', image: '/marvetech/console.jpg', category: 'Trade-in Deals' },
    { id: 5, name: 'Wireless Earbuds', image: '/marvetech/earbuds.jpg', category: 'Trade-in Deals' },
    { id: 6, name: 'Smartwatch', image: '/marvetech/smartwatch.jpg', category: 'Trade-in Deals' },
];

const categories = [
    { name: 'New Gadgets', description: 'Explore the latest in technology and innovation.' },
    { name: 'Trade-in Deals', description: 'Trade in your old devices and get the best deals on upgrades.' },
];

const MarvETech = () => {
    return (
        <PageWrapper>
            <HeroSection>
                <Overlay /> {/* Overlay for readability */}
                <HeroContent>
                    <Title>Welcome to MarvETech</Title>
                    <Subtitle>Your one-stop shop for the latest gadgets and trade-in options</Subtitle>
                </HeroContent>
            </HeroSection>

            {/* Categories Section */}
            <CategoriesSection>
                <SectionTitle>Our Categories</SectionTitle>
                <CategoriesGrid>
                    {categories.map((category, index) => (
                        <CategoryCard key={index}>
                            <CategoryTitle>{category.name}</CategoryTitle>
                            <CategoryDescription>{category.description}</CategoryDescription>
                            <Link href={`/store/marvetech/${category.name.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                                <CategoryLink>Explore {category.name}</CategoryLink>
                            </Link>
                        </CategoryCard>
                    ))}
                </CategoriesGrid>
            </CategoriesSection>

            {/* Featured Products Section */}
            <Section title="Featured Products" items={products} />
        </PageWrapper>
    );
};

// Dynamic Section Component for Products
const Section = ({ title, items }) => (
    <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        <ProductsGrid>
            {items.map(item => (
                <ProductCard key={item.id}>
                    <ProductImage src={item.image} alt={item.name} />
                </ProductCard>
            ))}
        </ProductsGrid>
    </SectionWrapper>
);

export default MarvETech;

// Styled Components

const PageWrapper = styled.div`
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const HeroSection = styled.div`
    position: relative;
    background-image: url('/marvetech/hero-image.jpg'); /* Path to your hero image */
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    @media (max-width: 768px) {
        padding: 40px 10px;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    z-index: 1;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    padding: 20px;
    border-radius: 8px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #1E90FF;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.2rem;
    color: #333;
`;

const SectionTitle = styled.h2`
    font-size: 2rem;
    margin: 40px 0 20px;
    color: #1E90FF;
    text-align: center;
`;

const SectionWrapper = styled.section`
    padding: 20px 0;
    background: rgba(240, 240, 240, 0.8);
    border-radius: 8px;
    &:nth-child(even) {
        background: rgba(230, 230, 230, 0.8);
    }
`;

const CategoriesSection = styled.section`
    padding: 20px 0;
`;

const CategoriesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const CategoryCard = styled.div`
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    width: 200px;
    text-align: center;
`;

const CategoryTitle = styled.h3`
    font-size: 1.3rem;
    color: #1E90FF;
`;

const CategoryDescription = styled.p`
    font-size: 0.9rem;
    color: #333;
`;

const CategoryLink = styled.a`
    color: #FFFFFF;
    background-color: #1E90FF;
    padding: 8px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;

    &:hover {
        background-color: #FFFFFF;
        color: #1E90FF;
    }
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-content: center;
`;

const ProductCard = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
    background-color: rgba(240, 240, 240, 0.8);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
