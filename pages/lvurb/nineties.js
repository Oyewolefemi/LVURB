// pages/lvurb/nineties.js
import styled from 'styled-components';
import Link from 'next/link';

const Nineties = () => {
    return (
        <PageWrapper>
            <LogoContainer>
                <Logo src="/90s.jpg" alt="thenineties logo" />
            </LogoContainer>
            <Title>Welcome to thenineties</Title>
            <Description>
                Embrace the spirit of the 90s with urban, minimalist styles crafted for the youth.
                Our collection brings back the boldness of the 90s with modern simplicity.
            </Description>
            <ActionButton href="/store/thenineties">Explore Full Collection</ActionButton>

            {/* Categories Section */}
            <SectionTitle>Categories</SectionTitle>
            <CategoriesContainer>
                <CategoryCard>
                    <CategoryTitle>Male</CategoryTitle>
                    <CategoryDescription>Explore our exclusive male collection inspired by the 90s.</CategoryDescription>
                    <Link href="/store/thenineties/male" passHref>
                        <CategoryLink>Shop Male</CategoryLink>
                    </Link>
                </CategoryCard>
                <CategoryCard>
                    <CategoryTitle>Unisex</CategoryTitle>
                    <CategoryDescription>Discover unisex styles that are bold and timeless.</CategoryDescription>
                    <Link href="/store/thenineties/unisex" passHref>
                        <CategoryLink>Shop Unisex</CategoryLink>
                    </Link>
                </CategoryCard>
            </CategoriesContainer>

            {/* Featured Products Section */}
            <SectionTitle>Featured Products</SectionTitle>
            <ProductsContainer>
                <ProductCard>
                    <ProductImage src="/90s/3.jpg" alt="Shirts" />
                    <ProductDetails>
                        <ProductName>Vintage rounds</ProductName>
                        <ProductPrice>***</ProductPrice>
                        <ProductDescription>Classic 90s-inspired round neck with a modern twist.</ProductDescription>
                    </ProductDetails>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="/90s/1.jpg" alt="Retro " />
                    <ProductDetails>
                        <ProductName>Retro Shirts</ProductName>
                        <ProductPrice>**</ProductPrice>
                        <ProductDescription>Iconic 90s feeling, perfect for any outfit.</ProductDescription>
                    </ProductDetails>
                </ProductCard>
                <ProductCard>
                    <ProductImage src="/90s/2.jpg" alt="Casual Hoodie" />
                    <ProductDetails>
                        <ProductName>Casual shirts</ProductName>
                        <ProductPrice>**</ProductPrice>
                        <ProductDescription>Comfortable hoodie with a classic urban look.</ProductDescription>
                    </ProductDetails>
                </ProductCard>
            </ProductsContainer>
        </PageWrapper>
    );
};

export default Nineties;

// Styled Components
const PageWrapper = styled.div`
    background-color: #000000;
    color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 20px;
`;

const LogoContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF0000;
    margin-bottom: 20px;
`;

const Logo = styled.img`
    width: 80%;
    height: auto;
    border-radius: 50%;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    max-width: 500px;
    margin-bottom: 20px;
`;

const ActionButton = styled(Link)`
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #FF0000;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #FF0000;
        color: #000000;
    }
`;

const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: #FFFFFF;
    margin: 30px 0 20px;
    text-align: center;
`;

const CategoriesContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;

const CategoryCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const CategoryTitle = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 5px;
    color: #FF0000;
`;

const CategoryDescription = styled.p`
    font-size: 0.9rem;
    margin-bottom: 15px;
`;

const CategoryLink = styled.a`
    color: #FFFFFF;
    background-color: #FF0000;
    padding: 8px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        background-color: #FFFFFF;
        color: #FF0000;
    }
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const ProductCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    width: 220px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: left;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const ProductDetails = styled.div`
    padding: 15px;
`;

const ProductName = styled.h4`
    font-size: 1.2rem;
    color: #FFFFFF;
    margin-bottom: 5px;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    color: #FF0000;
    font-weight: bold;
    margin-bottom: 10px;
`;

const ProductDescription = styled.p`
    font-size: 0.9rem;
    color: #CCCCCC;
    line-height: 1.4;
`;
