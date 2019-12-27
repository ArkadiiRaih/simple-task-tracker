import React, { useState, useEffect } from "react";

import Board from "./Board";

const Boards = () => {
  const [boards, setBoards] = useState([]);
  return (
    <div>
      <div>Boards page</div>
      {boards.lenght ? (
        boards.map(board => <Board key={board.id} {...board} />)
      ) : (
        <h1>No boards yet</h1>
      )}
    </div>
  );
};

export default Boards;
