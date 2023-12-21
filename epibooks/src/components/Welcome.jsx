import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      {["dark"].map((variant) => (
        <Alert key={variant} variant={variant}>
          <h1>EpiBook</h1>
          <p>Your library just a click away!</p>
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
