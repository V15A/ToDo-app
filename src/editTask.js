export default async function EditTask(props, id) {
  try {
    let res = await fetch("http://localhost:3001/tasks/" + id, {
      method: "PUT",
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
