import { Card } from "react-bootstrap/";

const SingleBook = ({ book }) => (
  <Card className="h-100 shadow mb-4">
    <Card.Img className="shadow" variant="top" src={book.img} style={{ height: "350px", objectFit: "contain" }} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;
