import CreateTask from "./itembox";

export default function CreateList(props) {
  // create list of individual tasks, possibility to sort them by name, tag and date
  let tasks = [];
  for (const obj in props) {
    if (
      (props[obj].status === props.status && props.search === "") ||
      (props[obj].status === props.status &&
        props[obj].name.includes(props.search))
    ) {
      tasks.push(<CreateTask {...props[obj]} update={props.update} />);
    }
  }
  return tasks;
}
