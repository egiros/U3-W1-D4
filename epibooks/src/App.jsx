import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./data/books/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={fantasy} />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
