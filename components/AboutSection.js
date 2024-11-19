const AboutSection = ({ description, keyValues }) => (
    <section className="about">
        <p>{description}</p>
        <ul>
            {keyValues.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
    </section>
);

export default AboutSection;
