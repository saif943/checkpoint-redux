import { React, useState } from "react";
import { useSelector } from "react-redux";
import Task from "../TASK/Task";

const ListTask = () => {
  const [status, setstatus] = useState("all");

  const Lists = useSelector((state) => state.TaskReducer.listTask);

  return (
    <div>
      <button variant="outline-primary" onClick={() => setstatus("all")}>
        All
      </button>
      <button variant="outline-primary" onClick={() => setstatus("done")}>
        Done
      </button>
      <button variant="outline-primary" onClick={() => setstatus("undone")}>
        Undone
      </button>
      {status === "done"
        ? Lists.filter((el) => el.isDone === true).map((el) => (
            <Task tas={el} key={el.id} />
          ))
        : status === "undone"
        ? Lists.filter((el) => el.isDone === false).map((el) => (
            <Task tas={el} key={el.id} />
          ))
        : Lists.map((el) => <Task tas={el} key={el.id} />)}

      {/* {Lists.map((el) => (
        <Task tas={el} key={el.id} />
      ))} */}
    </div>
  );
};

export default ListTask;
