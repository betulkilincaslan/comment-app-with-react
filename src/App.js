import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import SubmitButton from "../src/Components/SubmitButton";
import AddVote from "./Components/AddVote";
import AddComment from "./Components/AddComment";
import ListComment from "../src/Components/ListComment";
import "./App.css";
import alertify from "alertifyjs";

export default class App extends Component {
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
  };
  //Adding comment
  onCommentChange = (event) => {
    this.setState({ commentValue: event.target.value });
  };
  //Adding vote
  onVoteChange = (newRating) => {
    this.setState({ vote: newRating });
  };
  //Submitting comment
  onClickHandler = () => {
    const newState = this.state;
    if (this.state.vote !== 0 && this.state.commentValue.length > 3) {
      newState.comments.push({
        id: Math.random(),
        text: this.state.commentValue,
        vote: this.state.vote,
      });
      newState.commentValue = "";
      newState.vote = 0;

      this.setState({
        ...newState,
      });
    } else {
      if (this.state.vote === 0 && this.state.commentValue.length <= 3) {
        alertify.error(" Please vote and comment more than 3 characters. ", 4);
      } else {
        if (this.state.vote === 0) {
          alertify.error("Please vote.", 3);
        }
        if (this.state.commentValue.length <= 3) {
          alertify.error("Please comment more than 3 characters.", 4);
        }
      }
    }
  };
  //Delete comment
  deleteComment = (id) => {
    let updatedComments = this.state.comments;
    updatedComments = updatedComments.filter((comment) => comment.id !== id);
    this.setState({ comments: updatedComments });
  };

  render() {
    const { comments, commentValue, vote } = this.state;
    return (
      <div>
        <Container className="mt-4">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <ListComment
                comments={comments}
                deleteComment={this.deleteComment}
              />
              <AddComment
                commentValue={commentValue}
                onCommentChange={this.onCommentChange}
              />
              <AddVote onVoteChange={this.onVoteChange} vote={vote} />
              <SubmitButton onClickHandler={this.onClickHandler} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
