export default async function EditTask(oldData, newData) {
  try {
    let res = await fetch("http://localhost:3010/tasks/" + oldData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newData.name,
        tag: newData.tag,
        time: oldData.time,
        status: oldData.status,
      }),
    });
    console.log(res.status);
  } catch (err) {
    console.log(err);
  }
}
