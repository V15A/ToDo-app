/**
 * box that contains one task and related info
 */
import DeleteTask from "./deleteTask";
import EditTask from "./editTask";
import EditForm from "./editForm";

function CreateTask(task) {
  console.log(task);
  return (
    <div className="task-cont">
      <a href="#" id={task.tag} className="item-box">
        {task.name}
        <br />
        {task.tag}
      </a>
      <p>{task.time}</p>
      <button onClick={() => EditForm(task)}>Edit</button>{" "}
      <button onClick={() => DeleteTask(task.id)}>Delete</button>{" "}
      <button onClick={() => EditTask(task.id)}>Done</button>
    </div>
  );
}

export default CreateTask;
