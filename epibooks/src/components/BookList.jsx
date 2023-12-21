import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        className="mb-3"
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Row className="g-2 mb-5">
        {books
          .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((book) => (
            <Col xs={12} md={4}>
              <SingleBook key={book.asin} book={book} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BookList;
