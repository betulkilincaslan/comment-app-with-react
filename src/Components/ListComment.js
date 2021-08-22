import React from "react";
import { Table } from "reactstrap";
import Comment from "./Comment";

export default function ListComment(props) {
  const { comments, deleteComment } = props;

  return (
    <div>
      <h3 className="fs-3 fw-bold">Comments</h3>
      <hr />
      {comments.length > 0 ? (
        <Table responsive>
          <thead>
            <tr>
              <th>Comment</th>
              <th>Vote</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => {
              const { id, text, vote } = comment;
              return (
                <Comment
                  key={id}
                  id={id}
                  text={text}
                  vote={vote}
                  deleteComment={deleteComment}
                />
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h4 className="m-5">No comment yet.</h4>
      )}
    </div>
  );
}
