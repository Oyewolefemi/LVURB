import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
    return (
        <Wrapper>
            <Overlay />
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
                            <CardImage>
                                <Image src="nilah.jpeg" alt="Style Me Nilah" layout="fill" objectFit="cover" />
                            </CardImage>
                            <CardText>Style Me Nilah</CardText>
                        </Card>
                        <Card>
                            <CardImage>
                                <Image src="/90s.jpg" alt="The Nineties" layout="fill" objectFit="cover" />
                            </CardImage>
                            <CardText>The Nineties</CardText>
                        </Card>
                        <Card>
                            <CardImage>
                                <Image src="/niffy.jpg" alt="Handmade by Niffy" layout="fill" objectFit="cover" />
                            </CardImage>
                            <CardText>Handmade by Niffy</CardText>
                        </Card>
                        <Card>
                            <CardImage>
                                <Image src="/marv.jpg" alt="MarvETech" layout="fill" objectFit="cover" />
                            </CardImage>
                            <CardText>MarvETech</CardText>
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

// Styled components
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('/urban-background.jpg'); /* Now accessible in public folder */
    background-size: cover;
    background-position: center;
    color: #f5f5f5;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay for text readability */
    backdrop-filter: blur(5px); /* Slight blur for a frosted glass effect */
`;

const Content = styled.div`
    position: relative;
    z-index: 10;
    max-width: 800px;
    padding: 20px;
    text-align: center;
    color: #f5f5f5;
`;

const Intro = styled.div`
    padding: 20px;
    background: rgba(0, 0, 0, 0.8); /* Slightly translucent background */
    border-radius: 8px;
    backdrop-filter: blur(10px);
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    font-family: 'Cinzel', serif;
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: #ccc;
    margin-bottom: 1.5rem;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #ddd;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const CardContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const Card = styled.div`
    position: relative;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-end;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

const CardImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const CardText = styled.div`
    position: relative;
    z-index: 1;
    color: #fff;
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

const StoreLink = styled.a`
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #444, #666);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
        background: linear-gradient(135deg, #666, #444);
        transform: scale(1.05);
    }
`;
