const HeroSection = ({ bannerImage, storeName, tagline }) => (
    <section className="hero" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="overlay">
            <h2>{storeName}</h2>
            <p>{tagline}</p>
        </div>
    </section>
);

export default HeroSection;
