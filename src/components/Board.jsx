import React from "react";
import "./card.scss";

import { Link } from "@reach/router";

const Board = ({ boardName, id }) => {
  return (
    <Link className="card" to={`/board/${id}`}>
      <div className="card__body">{boardName}</div>
    </Link>
  );
};

export default Board;
