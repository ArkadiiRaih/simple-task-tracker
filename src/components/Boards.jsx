import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";
import { firestore } from "../firebase";
import AddBoard from "./AddBoard";
import { BoardsContext } from "../providers/BoardsProvider";

const Boards = () => {
  const boards = useContext(BoardsContext);
  const user = useContext(UserContext);

  const boardsRef = () => firestore.collection("/boards");

  async function onCreate(boardName) {
    const board = {
      name: boardName,
      owner: user.uid
    };
    await boardsRef().add(board);
  }
  return (
    <div className="p-t_m">
      <h1>Boards Page</h1>
      <div className="grid w-70 p-t_m">
        <AddBoard onCreate={onCreate} />
        {boards &&
          boards.map(({ id, name }) => (
            <Link className="card" key={id} to={`/boards/${id}`}>
              <div>{name}</div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Boards;
