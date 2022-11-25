import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_MEALS = 
[{
  id: 'p1', price: 6,
  title: 'test Item 1',
  description: 'described as brilliant!'
},
{
id: 'p2', price: 9,
title: 'test Item 2',
description: 'described as brilliant!'
}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_MEALS.map((products) => (
          <ProductItem
          key={products.id}
          id={products.id}
          title={products.title}
          price={products.price}
          description={products.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
