import { Component } from "react";
import { Card } from "react-bootstrap/";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          className="h-100 shadow mb-4"
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "2px solid red" : "none" }}
        >
          <Card.Img
            className="shadow"
            variant="top"
            src={this.props.book.img}
            style={{ height: "350px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    );
  }
}

export default SingleBook;
