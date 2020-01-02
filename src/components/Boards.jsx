import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";
import { firestore } from "../firebase";
import AddBoard from "./AddBoard";
import { BoardsContext } from "../providers/BoardsProvider";
import "./style/boards.scss";

const Boards = () => {
  const boards = useContext(BoardsContext);
  const user = useContext(UserContext);

  const boardsRef = firestore.collection("/boards");

  const onCreate = boardName => {
    const board = {
      name: boardName,
      owner: user.uid
    };
    boardsRef.add(board);
  };

  const onDelete = id => {
    boardsRef.doc(id).delete();
  };

  return (
    <div className="p-t_head text_center">
      <h1 className="h1">Your boards</h1>
      <div className="grid w-70 p-t_m">
        {boards &&
          boards.map(({ id, name }) => (
            <div key={id} className="card grid__item_default">
              <Link className="card__body card__link" to={`/boards/${id}`}>
                {name}
              </Link>
              <button
                className="button button_cancel"
                onClick={() => onDelete(id)}
              >
                Delete board
              </button>
            </div>
          ))}
        <AddBoard onCreate={onCreate} />
      </div>
    </div>
  );
};

export default Boards;
