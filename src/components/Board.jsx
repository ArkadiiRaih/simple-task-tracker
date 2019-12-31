import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "@reach/router";
import { isEmpty } from "lodash";

import { UserContext } from "../providers/UserProvider";
import { firestore } from "../firebase";
import Column from "./Column";
import "./style/card.scss";

const Board = ({ boardId }) => {
  const user = useContext(UserContext);
  const [board, setBoard] = useState({});
  const [newColumnName, setNewColumnName] = useState("");

  let unsubscribeFromFirestore = null;
  useEffect(() => {
    unsubscribeFromFirestore = firestore
      .doc(`boards/${boardId}`)
      .onSnapshot(doc => setBoard(doc.data()));

    return unsubscribeFromFirestore;
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const column = { name: newColumnName, tasks: [] };
    firestore
      .doc(`boards/${boardId}`)
      .update({ subboards: [...board.subboards, column] });
    setNewColumnName("");
  };
  const handleChange = e => {
    setNewColumnName(e.target.value);
  };

  if (isEmpty(user)) {
    return <Redirect to="/auth" noThrow />;
  }
  return (
    <div className="w-70 p-t_m">
      <div className="grid p-t_m">
        {board.subboards ? (
          board.subboards.map((sub, idx) => (
            <Column
              key={`${boardId}${sub.name}${idx}`}
              subBoard={sub}
              boardId={boardId}
              idx={idx}
            />
          ))
        ) : (
          <></>
        )}
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newColumnName}
              onChange={handleChange}
              placeholder="column name"
            />
            <button type="submit">Add Column</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Board;
