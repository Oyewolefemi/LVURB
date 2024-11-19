const FeaturedProducts = ({ products }) => (
    <section className="featured-products">
        <h3>Featured Products</h3>
        <div className="product-cards">
            {products.map((product, index) => (
                <div className="product-card" key={index}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                </div>
            ))}
        </div>
    </section>
);

export default FeaturedProducts;
