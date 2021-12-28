export default async function DeleteTask(id) {
  try {
    let res = await fetch("http://localhost:3010/tasks/" + id, {
      method: "DELETE",
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
