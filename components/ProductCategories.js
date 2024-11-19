const ProductCategories = ({ categories }) => (
    <section className="product-categories">
        <h3>Product Categories</h3>
        <div className="category-cards">
            {categories.map((category, index) => (
                <div className="category-card" key={index}>
                    <img src={category.image} alt={category.name} />
                    <button>{category.name}</button>
                </div>
            ))}
        </div>
    </section>
);

export default ProductCategories;
