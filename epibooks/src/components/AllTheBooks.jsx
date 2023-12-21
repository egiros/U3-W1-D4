import { Button, Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="d-flex flex-column h-100 shadow">
              <Card.Img style={{ height: "350px", objectFit: "contain" }} variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="dark">€ {book.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
