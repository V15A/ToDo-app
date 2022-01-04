import React from "react";
import CreateTask from "./itembox";

/**
 * Create list that contains tasks filtered with given search term
 */
var compTasks = [];
function CreateList(props) {
  let tasks = [];
  compTasks = [];
  let count = 0;
  for (const obj in props) {
    // check if the fetched task matches search and status
    if (
      (props[obj].status === props.status && props.search === "") ||
      (props[obj].status === props.status &&
        props[obj].name.includes(props.search)) ||
      (props[obj].status === props.status &&
        props[obj].tag.includes(props.search))
    ) {
      count++;
      compTasks.push(props[obj]);
      tasks.push(
        <CreateTask {...props[obj]} key={obj} k={count} update={props.update} />
      );
    }
  }
  //compTasks = tasks;
  return tasks;
}

function ReOrder(props, direction) {
  let clickedTask = props;
  let nextTask = [];
  // klikatun task/taskin id muuttujaan
  // joko ylä tai alapuolisen taskin id/task muuttujaan
  // jos 0 niin salapuolinen, jos 1 niin yläpuolinen
  if (direction === 0) {
    nextTask = compTasks[clickedTask.k];
  } else if (direction === 1) {
    nextTask = compTasks[clickedTask.k - 2];
  } else {
    console.log("Error, incorrect value. Give 1 or 0.");
  }

  // fetchillä tallennetaan ristiin päälle
  async function crossSaveTasks(oldTask, newTask) {
    try {
      let res = await fetch("http://localhost:3010/tasks/" + oldTask.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newTask.id,
          name: newTask.name,
          tag: newTask.tag,
          time: newTask.time,
          status: newTask.status,
        }),
      });
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
    try {
      let res = await fetch("http://localhost:3010/tasks/" + newTask.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: oldTask.id,
          name: oldTask.name,
          tag: oldTask.tag,
          time: oldTask.time,
          status: oldTask.status,
        }),
      });
      props.update();
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
  }
  if (nextTask !== undefined) {
    compTasks = [];
    crossSaveTasks(clickedTask, nextTask);
  }
}

export default CreateList;
export { ReOrder };
