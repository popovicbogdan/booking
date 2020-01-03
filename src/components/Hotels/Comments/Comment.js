import React from "react";
import { CommentCont, Author, Country, CommentText } from "./Comment.styled";

const Comment = ({ comment }) => {
  return (
    <CommentCont>
      <Author>{comment.author}</Author>
      <Country>{comment.country}</Country>
      <br />
      <CommentText>"{comment.text}"</CommentText>
    </CommentCont>
  );
};

export default Comment;
