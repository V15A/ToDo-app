import CreateTask from "./itembox";

export default function CreateList(props) {
  // create list of individual tasks, possibility to sort them by tag and date
  let tasks = [];
  for (const obj in props) {
    if (props[obj].status === "pending") {
      tasks.push(<CreateTask {...props[obj]} />);
    }
  }
  return tasks;
}
