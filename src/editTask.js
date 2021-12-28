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
        date: oldData.date,
      }),
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
