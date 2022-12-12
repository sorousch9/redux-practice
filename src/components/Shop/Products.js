import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DummyProduct = [
  {
    id: "p1",
    price: 59,
    title: "Johnny Urban Rucksack",
    description: "Volume: 12.5 l (Size One Size)",
  },
  {
    id: "p2",
    price: 33,
    title: "Carhartt WIP Rucksack",
    description: "Height: 22 cm (Size One Size),Length: 16 cm (Size One Size)",
  },
  {
    id: "p3",
    price: 18,
    title: "Nike Sportswear Across body bag",
    description: "Height: 24 cm (Size One Size),Length: 19 cm (Size One Size)",
  },
  {
    id: "p4",
    price: 26,
    title: "The North Face JESTER ",
    description: "Height: 20 cm (Size One Size),Length: 15 cm (Size One Size)",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProduct.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
