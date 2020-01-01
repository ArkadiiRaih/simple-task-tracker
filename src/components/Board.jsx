import React, { useEffect, useState } from "react";

import firebase, { firestore } from "../firebase";
import Column from "./Column";
import { collectIdsAndDocs } from "../utilities";
import "./style/card.scss";

const Board = ({ boardId }) => {
  const [newColumnName, setNewColumnName] = useState("");
  const [columns, setColumns] = useState([]);

  const boardRef = firestore.doc(`boards/${boardId}`);
  const columnsRef = boardRef.collection("columns");

  useEffect(() => {
    const unsubscribeFromColumns = columnsRef.onSnapshot(snapshot => {
      const columns = snapshot.docs.map(collectIdsAndDocs);
      setColumns(columns);
    });
    return unsubscribeFromColumns;
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    columnsRef.add({ colName: newColumnName, tasks: [] });
    setNewColumnName("");
  };
  const handleChange = e => {
    setNewColumnName(e.target.value);
  };

  const onCreate = (taskName, id) => {
    columnsRef.doc(id).update({
      tasks: firebase.firestore.FieldValue.arrayUnion({
        taskName,
        description: ""
      })
    });
  };

  return (
    <div className="w-70 p-t_m">
      <div className="grid p-t_m">
        {columns &&
          columns.map(col => (
            <Column key={col.id} {...col} onCreate={onCreate} />
          ))}
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
