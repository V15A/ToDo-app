/**
 * box that contains one task and related info
 */
import React, { useEffect, useState } from "react";
import DeleteTask from "./deleteTask";
import EditTask from "./editTask";
import EditForm from "./editForm";

function CreateTask(task) {
  // console.log(task);
  // const [renderForm, setRenderForm] = useState(false);
  /*useEffect(() => {
    console.log(renderForm);
  });*/

  return (
    <div className="task-cont">
      <a href="#" id={task.tag} className="item-box">
        {task.name}
        <br />
        {task.tag}
      </a>
      <p>{task.time}</p>
      <EditForm {...task} update={task.update} />{" "}
      <button onClick={() => DeleteTask(task)}>Delete</button>{" "}
      <button onClick={() => EditTask(task, { status: "done" })}>Done</button>
    </div>
  );
}
//<EditButton {...task} />
export default CreateTask;
