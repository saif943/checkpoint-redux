import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/Actions";

import "./Add.css";

const Add = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <title>Todo App</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="style.css"
        type="text/css"
        media="screen"
        charset="utf-8"
      />
      <div class="container">
        <p>
          <label class="new-task"></label>
          <input
            id="new-task"
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button
            onClick={(e) =>
              dispatch(
                addTask({
                  id: Math.random(),
                  text: task,
                  isDone: false,
                  editabl: false,
                })
              )
            }
          >
            Add
          </button>
        </p>
      </div>
    </div>
  );
};

export default Add;
