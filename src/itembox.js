/**
 * box that contains one task and related info
 */
import React from "react";
import DeleteTask from "./deleteTask";
import EditForm from "./editForm";
import { ReOrder } from "./taskList";

function CreateTask(task) {
  // console.log(task);
  // const [renderForm, setRenderForm] = useState(false);
  /*useEffect(() => {
    console.log(renderForm);
  });*/
  if (window.visualViewport.width < 800 && task.status === "pending") {
    return (
      <li
        style={{
          backgroundColor: "white",
          borderRadius: "4px",
          marginRight: "7%",
          marginTop: "4px",
          padding: "3px",
        }}
      >
        {" "}
        <a href="#" id={task.tag} className="item-box">
          {task.name} {task.tag} {task.time}
        </a>
        {"  "}
        <EditForm {...task} update={task.update} />
        {"  "}
        <button onClick={() => DeleteTask(task)}>Delete</button>
        {"  "}
        <button onClick={() => markDone(task)}>Done</button>
        {"  "}
        <button onClick={() => ReOrder(task, 1)}>up</button>
        <button onClick={() => ReOrder(task, 0)}>down</button>
      </li>
    );
  } else if (window.visualViewport.width < 800 && task.status === "done") {
    return (
      <li
        style={{
          backgroundColor: "white",
          borderRadius: "4px",
          marginRight: "7%",
          marginTop: "4px",
          padding: "3px",
        }}
      >
        {" "}
        <a href="#" id={task.tag} className="item-box">
          {task.name} {task.tag} {task.time}
        </a>
      </li>
    );
  } else if (task.status === "done") {
    return (
      <div className="task-cont">
        <a href="#" id={task.tag} className="item-box">
          {task.name}
          <br />
          {task.tag}
        </a>
        <p>{task.time}</p>
      </div>
    );
  } else {
    return (
      <div className="task-cont">
        {task.k}
        {". "}
        <a href="#" id={task.tag} className="item-box">
          {task.name}
          <br />
          {task.tag}
        </a>
        <p>{task.time}</p>
        <EditForm {...task} update={task.update} />{" "}
        <button onClick={() => DeleteTask(task)}>Delete</button>{" "}
        <button onClick={() => markDone(task)}>Done</button>{" "}
        <button onClick={() => ReOrder(task, 1)}>up</button>
        <button onClick={() => ReOrder(task, 0)}>down</button>
      </div>
    );
  }
}
//<EditButton {...task} />
export default CreateTask;

async function markDone(props) {
  try {
    let res = await fetch("http://localhost:3010/tasks/" + props.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        tag: props.tag,
        time: props.time,
        status: "done",
      }),
    });
    props.update();
    console.log(res.status);
  } catch (err) {
    console.log(err);
  }
}
