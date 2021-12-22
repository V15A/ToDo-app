/**
 * box that contains one task and related info
 */

function CreateTask(task) {
  console.log(task);
  return (
    <div className="task-cont">
      <a href="#" className="item-box">
        {task.name}
        <br />
        {task.tag}
      </a>
      <p>{task.time}</p>
      <button>Edit</button> <button>Delete</button>
    </div>
  );
}

export default CreateTask;
