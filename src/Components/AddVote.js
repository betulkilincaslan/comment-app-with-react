import React from "react";
import ReactStars from "react-rating-stars-component";

export default function AddVote(props) {
  const { onVoteChange } = props;

  return (
    <div>
      <ReactStars
        count={5}
        onChange={onVoteChange}
        size={32}
        activeColor="#ffd700"
      />
    </div>
  );
}
