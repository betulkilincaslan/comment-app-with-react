import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default function AddComment(props) {
  const { commentValue, onCommentChange } = props;

  return (
    <div>
      <FormGroup>
        <Label className="fs-4 fw-bold" for="comment">
          Add Comment
        </Label>
        <Input
          onChange={onCommentChange}
          type="textarea"
          name="commentValue"
          id="commentValue"
          placeholder="comment"
          value={commentValue}
        />
      </FormGroup>
    </div>
  );
}
