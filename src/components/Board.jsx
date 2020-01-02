import React, { useEffect, useState } from "react";

import firebase, { firestore } from "../firebase";
import Column from "./Column";
import { collectIdsAndDocs } from "../utilities";
import AddItem from "./AddItem";
import "./style/board.scss";

const Board = ({ boardId }) => {
  const [columns, setColumns] = useState([]);

  const boardRef = firestore.doc(`boards/${boardId}`);
  const columnsRef = boardRef.collection("columns");

  useEffect(() => {
    const unsubscribeFromColumns = columnsRef.onSnapshot(snapshot => {
      const columns = snapshot.docs.map(collectIdsAndDocs);
      setColumns(columns.sort((col1, col2) => col1.order - col2.order));
    });
    return unsubscribeFromColumns;
  }, []);

  const onColumnAdd = colName => {
    columnsRef.add({ colName, tasks: [], order: columns.length });
  };
  const onColumnDelete = id => {
    return () => columnsRef.doc(id).delete();
  };

  const onTaskAdd = id => {
    return taskName =>
      columnsRef.doc(id).update({
        tasks: firebase.firestore.FieldValue.arrayUnion({
          taskName,
          description: ""
        })
      });
  };

  const onTaskDelete = id => {
    return task =>
      columnsRef.doc(id).update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task)
      });
  };

  return (
    <div className="board-wrapper p-t_head">
      {columns &&
        columns.map(col => (
          <Column
            key={col.id}
            {...col}
            onTaskAdd={onTaskAdd(col.id)}
            onTaskDelete={onTaskDelete(col.id)}
            onColumnDelete={onColumnDelete(col.id)}
          />
        ))}
      <div className="column-wrapper">
        <div className="column">
          <div className="column__body">
            <AddItem onAdd={onColumnAdd} item="column" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
