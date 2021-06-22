import { useEffect, useState } from "react";
import "./BoardList.css";
import BoardCard from "../boardCard/BoardCard";

const createBoard = (boardData) => {
  fetch("http://localhost:5001", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(boardData), // body data type must match "Content-Type" header
  });
};

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  }, []);

  return (
    <div>
      <span className="boardsList__title">Boards</span>
      <div className="boardsList__container">
        {boards.map((board) => (
          <BoardCard board={board} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
