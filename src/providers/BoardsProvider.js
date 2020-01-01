import React, { useState, useEffect, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import withUser from "../components/withUser";

export const BoardsContext = createContext(null);

const BoardsProvider = ({ children, user }) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    if (!user) return;
    const { uid } = user;
    const unsubscribeFromBoards = firestore
      .collection("boards")
      .where("owner", "==", uid)
      .onSnapshot(snapshot => {
        const boards = snapshot.docs.map(collectIdsAndDocs);
        setBoards(boards);
      });
    return unsubscribeFromBoards;
  }, [user]);
  return (
    <BoardsContext.Provider value={boards}>{children}</BoardsContext.Provider>
  );
};

export default withUser(BoardsProvider);
