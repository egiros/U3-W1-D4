import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (commentId) => {
    const shouldDelete = window.confirm("Sei sicuro di voler eliminare questa recensione?");
    if (!shouldDelete) {
      return; // Annulla l'eliminazione se l'utente ha cliccato su "Annulla"
    }

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer ilTuoBearerToken",
        },
      });
      if (response.ok) {
        alert("La recensione è stata eliminata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
