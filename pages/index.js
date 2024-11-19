// pages/index.js
import styled from 'styled-components';
import Link from 'next/link';

const HomePage = () => {
    return (
        <Wrapper>
            <Content>
                <Intro>
                    <Title>Welcome to Levithan Urban</Title>
                    <Subtitle>Urban Elegance Meets Contemporary Fashion</Subtitle>
                    <Description>
                        Discover a curated selection of urban style, handcrafted pieces, and sustainable designs.
                        At Levithan Urban, we bring you fashion that speaks to modern youth—bold, stylish, and rooted in
                        quality. Dive into our collections and elevate your wardrobe with pieces that truly reflect
                        your unique style.
                    </Description>
                    <CardContainer>
                        <Card>
                            <CardImage src="/nilah.jpg" alt="Style Me Nilah" />
                            <CardText>Style Me Nilah</CardText>
                        </Card>
                        <Card>
                            <CardImage src="/90s.jpg" alt="The Nineties" />
                            <CardText>thenineties</CardText>
                        </Card>
                        <Card>
                            <CardImage src="/niffy.jpg" alt="Handmade by Niffy" />
                            <CardText>Handmade by Niffy</CardText>
                        </Card>
                        <Card>
                            <CardImage src="/marv.jpg" alt="MarvETech" />
                            <CardText>MarvETech</CardText>
                        </Card>
                        <Card>
                            <CardImage src="/rayshee.jpg" alt="MarvETech" />
                            <CardText>Slay With Rayshe</CardText>
                        </Card>
                    </CardContainer>
                    <ButtonContainer>
                        <StoreLink href="/storeX">Explore the Collection</StoreLink>
                    </ButtonContainer>
                </Intro>
            </Content>
        </Wrapper>
    );
};

export default HomePage;

// Styled Components
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw; /* Full width of the viewport */
    min-height: 100vh; /* Full height of the viewport */
    background-image: url('/red.png'); /* Reference to red.png in the public folder */
    background-size: contain; /* Ensures the image fits within the viewport without cropping */
    background-repeat: no-repeat; /* Prevents tiling */
    background-position: center; /* Centers the image */
`;

const Content = styled.div`
    position: relative;
    z-index: 10;
    max-width: 800px;
    padding: 20px;
    text-align: center;
    color: #333; /* Dark text for readability */
`;

const Intro = styled.div`
    padding: 20px;
    background: rgba(255, 255, 255, 0.6); /* White transparent background */
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Subtle shadow for elevation */
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #000;
    font-family: 'Cinzel', serif;
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const CardContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.3); /* Transparent glassy background for cards */
    border-radius: 10px;
    padding: 10px;
`;

const Card = styled.div`
    position: relative;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2); /* Slightly translucent */
    backdrop-filter: blur(10px); /* Glass effect */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-end;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Enlarges slightly on hover */
        box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.5); /* Shiny effect */
    }
`;

const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
`;

const CardText = styled.div`
    position: relative;
    z-index: 1;
    color: #000;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px;
    text-align: center;
    font-family: 'Cinzel', serif;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
`;

const StoreLink = styled(Link)`
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.6); /* White transparent button */
    color: #333;
    font-weight: bold;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.05);
    }
`;
