export default async function NewTasks(props) {
  try {
    let res = await fetch("http://localhost:3001/tasks", {
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
