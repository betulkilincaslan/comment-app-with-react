import React from "react";
import ReactStars from "react-rating-stars-component";
import { Button } from "reactstrap";

export default function Comment(props) {
  const { id, text, vote, deleteComment } = props;

  return (
    <tr>
      <td>{text}</td>
      <td>
        <ReactStars
          classNames="centeringStar"
          edit={false}
          count={5}
          size={24}
          activeColor="#ffd700"
          value={vote}
        />
      </td>
      <td>
        <Button onClick={() => deleteComment(id)} color="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  );
}
