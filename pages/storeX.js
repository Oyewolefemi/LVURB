import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Global Styles for Theme
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Cinzel', serif;
        background-color: ${({ theme }) => (theme === 'dark' ? '#000000' : '#FFFFFF')};
        color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : '#000000')};
        transition: background-color 0.3s, color 0.3s;
    }
`;

const storesData = [
    {
        image: '/niffy.jpg',
        story: 'Handmade By Niffy provides artisan-made pieces, designed for elegance and sustainability.',
        filename: 'niffy',
    },
    {
        image: '/90s.jpg',
        story: 'thenineties brings back the iconic styles and vibes of the 90s, crafted for today.',
        filename: 'nineties',
    },
    {
        image: '/nilah.jpg',
        story: 'Style Me Nilah offers chic, contemporary fashion pieces with an urban edge.',
        filename: 'nilah',
    },
    {
        image: '/marv.jpg',
        story: 'MarvETech merges high-tech innovation with contemporary fashion.',
        filename: 'marvetech',
    },
    {
        image: '/rayshee.jpg',
        story: 'MarvETech merges high-tech innovation with contemporary fashion.',
        filename: 'rayshee',
    },
];

const StoresPage = () => {
    const [theme, setTheme] = useState('dark');

    // Detect user's device theme preference
    useEffect(() => {
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(userPrefersDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <GlobalStyle theme={theme} />
            <PageWrapper>
                <Header>
                    <Title>Our Stores</Title>
                    <ThemeSwitch onClick={toggleTheme}>
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </ThemeSwitch>
                    <Subtitle>Discover our unique stores, each with its own story and style</Subtitle>
                </Header>
                <StoresContainer>
                    {storesData.map((store) => (
                        <StoreCard key={store.filename} theme={theme}>
                            <CardImage src={store.image} alt={store.name} />
                            <CardContent>
                                <StoreName>{store.name}</StoreName>
                                <StoreTagline>{store.tagline}</StoreTagline>
                                <Link href={`/lvurb/${store.filename}`} passHref>
                                    <ExploreLink theme={theme}>Explore {store.name}</ExploreLink>
                                </Link>
                            </CardContent>
                        </StoreCard>
                    ))}
                </StoresContainer>
                <StoriesSection theme={theme}>
                    <StoryTitle>The Stories Behind Our Stores</StoryTitle>
                    {storesData.map((store) => (
                        <Story key={store.filename}>
                            <StoreTitle>{store.name}</StoreTitle>
                            <StoryText>{store.story}</StoryText>
                        </Story>
                    ))}
                </StoriesSection>
            </PageWrapper>
        </>
    );
};

export default StoresPage;

// Styled Components
const PageWrapper = styled.div`
    padding: 20px;
    text-align: center;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => (theme === 'dark' ? '#CCC' : '#666')};
`;

const ThemeSwitch = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SunIcon = styled.div`
    width: 24px;
    height: 24px;
    background: yellow;
    border-radius: 50%;
    box-shadow: 0 0 10px yellow;
`;

const MoonIcon = styled.div`
    width: 24px;
    height: 24px;
    background: gray;
    border-radius: 50%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 14px;
        height: 14px;
        background: white;
        border-radius: 50%;
    }
`;

const StoresContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

const StoreCard = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#EEE')};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    height: 300px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
`;

const CardContent = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 1;
`;

const StoreName = styled.h3`
    font-size: 1.5rem;
`;

const StoreTagline = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
`;

const ExploreLink = styled.a`
    font-size: 0.9rem;
    padding: 8px 12px;
    background: ${({ theme }) => (theme === 'dark' ? '#444' : '#DDD')};
    color: ${({ theme }) => (theme === 'dark' ? '#FFF' : '#000')};
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background: ${({ theme }) => (theme === 'dark' ? '#666' : '#BBB')};
    }
`;

const StoriesSection = styled.div`
    margin-top: 50px;
    padding: 20px;
    border-radius: 10px;
    background: ${({ theme }) => (theme === 'dark' ? '#111' : '#F9F9F9')};
`;

const StoryTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 30px;
`;

const Story = styled.div`
    margin-bottom: 20px;
`;

const StoreTitle = styled.h3`
    font-size: 1.3rem;
`;

const StoryText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
`;
