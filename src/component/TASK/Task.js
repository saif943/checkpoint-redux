import { React, useState } from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { deletetask, doneTask, saveTask } from "../../Redux/Actions/Actions";

const Task = ({ tas }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(tas.text);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSave = () => {
    dispatch(saveTask({ id: tas.id, a: edit }));
    setShow(!show);
  };

  const handleEdit = () => {
    setShow(!show);
  };
  return (
    <div>
      <h3>Todo</h3>

      <ul id="incomplete-tasks">
        <li>
          <input
            type="checkbox"
            onClick={() => dispatch(doneTask(tas.id, tas.isDone))}
          />
          {/* testing if edit is true =>input else =>label */}
          {show ? (
            <div>
              <input
                id="new-task"
                // type="text"
                onChange={(e) => setEdit(e.target.value)}
                value={edit}
              />
              <button className="edit" onClick={handleSave}>
                save
              </button>{" "}
            </div>
          ) : (
            <label>{tas.text}</label>
          )}

          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="delete"
            onClick={() => dispatch(deletetask(tas.id))}
          >
            Delete
          </button>
        </li>
        {/* <li className="editMode">
          <input type="checkbox" />
          <label>Go Shopping</label>
          <input type="text" value="Go Shopping" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li> */}
      </ul>

      {/* <h3>Completed</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox" checked />
          <label>See the Doctor</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul> */}
    </div>
  );
};

export default Task;
