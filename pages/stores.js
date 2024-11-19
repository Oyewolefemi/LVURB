// pages/stores.js
import styled from 'styled-components';
import Link from 'next/link';

const storesData = [
    {
        id: 1,
        name: 'Style Me Nilah',
        tagline: 'Chic and Modern Fashion',
        image: '/nilah.jpg', // Ensure this image is in the public folder
        story: 'Style Me Nilah offers chic, contemporary fashion pieces with an urban edge.',
        filename: 'nilah',
    },
    {
        id: 2,
        name: 'thenineties',
        tagline: 'Reviving the Spirit of the 90s',
        image: '/90s.jpg', // Ensure this image is in the public folder
        story: 'thenineties brings back the iconic styles and vibes of the 90s, crafted for today.',
        filename: 'nineties',
    },
    {
        id: 3,
        name: 'Handmade By Niffy',
        tagline: 'Artisan Fashion with Heart',
        image: '/niffy.jpg', // Ensure this image is in the public folder
        story: 'Handmade By Niffy provides artisan-made pieces, designed for elegance and sustainability.',
        filename: 'niffy',
    },
    {
        id: 4,
        name: 'MarvETech',
        tagline: 'Technology Meets Style',
        image: '/marv.jpg', // Ensure this image is in the public folder
        story: 'MarvETech merges high-tech innovation with contemporary fashion.',
        filename: 'marvetech',
    },
    {
        id: 4,
        name: 'Slay with Rayshe',
        tagline: '#####',
        image: '/marv.jpg', // Ensure this image is in the public folder
        story: 'tdttttttttttttttttttttttttttttt.',
        filename: 'rayshee',
    },
];

const StoresPage = () => {
    return (
        <PageWrapper>
            <Header>
                <Title>Our Stores</Title>
                <Subtitle>Discover our unique stores, each with its own story and style</Subtitle>
            </Header>
            <StoresContainer>
                {storesData.map((store) => (
                    <StoreCard key={store.id}>
                        <CardImage src={store.image} alt={store.name} />
                        <CardOverlay />
                        <CardContent>
                            <StoreName>{store.name}</StoreName>
                            <StoreTagline>{store.tagline}</StoreTagline>
                            <Link href={`/lvurb/${store.filename}`} passHref>
                                <ExploreLink>Explore {store.name}</ExploreLink>
                            </Link>
                        </CardContent>
                    </StoreCard>
                ))}
            </StoresContainer>
            <StoriesSection>
                <StoryTitle>The Stories Behind Our Stores</StoryTitle>
                {storesData.map((store) => (
                    <Story key={store.id}>
                        <StoreTitle>{store.name}</StoreTitle>
                        <StoryText>{store.story}</StoryText>
                    </Story>
                ))}
            </StoriesSection>
        </PageWrapper>
    );
};

export default StoresPage;

// Styled Components
const PageWrapper = styled.div`
    font-family: 'Cinzel', serif;
    background-color: #1a1a1a;
    color: #f5f5f5;
    padding: 20px;
    text-align: center;
`;

const Header = styled.header`
    margin-bottom: 40px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #fff;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: #ccc;
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
    background-color: rgba(255, 255, 255, 0.1);
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

const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
`;

const CardContent = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    z-index: 1;
`;

const StoreName = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const StoreTagline = styled.p`
    font-size: 1rem;
    color: #ddd;
    margin-bottom: 10px;
`;

const ExploreLink = styled.a`
    font-size: 0.9rem;
    padding: 8px 12px;
    background: linear-gradient(135deg, #444, #666);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background: linear-gradient(135deg, #666, #444);
        transform: scale(1.05);
    }
`;

const StoriesSection = styled.div`
    margin-top: 50px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    text-align: left;
`;

const StoryTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
`;

const Story = styled.div`
    margin-bottom: 20px;
`;

const StoreTitle = styled.h3`
    font-size: 1.3rem;
    color: #fff;
`;

const StoryText = styled.p`
    font-size: 1rem;
    color: #ddd;
    margin-top: 5px;
    line-height: 1.6;
`;
