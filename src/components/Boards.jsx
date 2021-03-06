import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { Link, navigate } from "@reach/router";
import { firestore } from "../firebase";
import AddBoard from "./AddBoard";
import { BoardsContext } from "../providers/BoardsProvider";
import "./style/boards.scss";
import Modal from "./Modal";

const boardsRef = firestore.collection("/boards");

const Boards = () => {
  const boards = useContext(BoardsContext);
  const user = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const onCreate = async boardName => {
    const board = {
      name: boardName,
      owner: user.uid
    };
    const bId = await boardsRef.add(board).then(doc => doc.id);
    navigate(bId);
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
            <div key={id} className="card card_s grid__item_default">
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
        <div className="card card_s grid__item_default">
          <Link
            className="card__body card__link"
            to="#addBoard"
            onClick={toggleModal}
          >
            {" "}
            Add new board
          </Link>
        </div>
      </div>
      {showModal ? (
        <Modal toggleModal={toggleModal} modalTitle="Create new board">
          <AddBoard onCreate={onCreate} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Boards;
