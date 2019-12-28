import React, { useState, useEffect } from "react";

import Board from "./Board";

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const boardsDefault = [
    {
      id: 1,
      boardName: "First Board"
    },
    {
      id: 2,
      boardName: "Second Board"
    },
    {
      id: 3,
      boardName: "Third Board"
    }
  ];
  useEffect(() => {
    setBoards(boardsDefault);
  }, []);
  return (
    <div className="w-70 p-t_m">
      <h1 className="h1">Your Boards</h1>
      <div className="grid p-t_m">
        <div className="card">Add New Board</div>
        {boards ? (
          boards.map(board => <Board key={board.id} {...board} />)
        ) : (
          <h1>No boards yet</h1>
        )}
      </div>
    </div>
  );
};

export default Boards;
