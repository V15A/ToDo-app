export default async function NewTasks(props) {
  try {
    console.log(props.name);
    let res = await fetch("http://localhost:3010/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
