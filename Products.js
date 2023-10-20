import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "./CartContext";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function ProductCard({ title, price, imageUrl }) {
  const { dispatch } = useCart(); // Use the useCart hook to access the dispatch function.

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => addToCart({ title, price, imageUrl })}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

function Products() {
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
