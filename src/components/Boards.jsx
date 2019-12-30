import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../providers/UserProvider";
import { makePathFromString } from "../utilities";
import { Link } from "@reach/router";
import { firestore } from "../firebase";

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const user = useContext(UserContext);
  const [newBoardName, setNewBoardName] = useState("");
  const boardsRef = firestore.collection("boards");
  useEffect(() => {
    const boards = user.boards;
    setBoards(boards);
  }, [user]);

  const handleChange = e => {
    setNewBoardName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const board = {
      boardName: newBoardName,
      subboards: [],
      users: user.uid
    };
    boardsRef.add(board);

    setNewBoardName("");
  };
  return (
    <div className="w-70 p-t_m">
      <h1 className="h1">Your Boards</h1>
      <div className="grid p-t_m">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newBoardName}
              onChange={handleChange}
              placeholder="Board name"
            />
            <button type="submit">Add New Board</button>
          </form>
        </div>
        {boards ? (
          boards.map(board => (
            <Link
              key={board.boardId}
              className="card"
              to={`/${makePathFromString(user.displayName)}/${board.boardId}`}
            >
              <div className="card__body">{board.boardName}</div>
            </Link>
          ))
        ) : (
          <h1>No boards yet</h1>
        )}
      </div>
    </div>
  );
};

export default Boards;
