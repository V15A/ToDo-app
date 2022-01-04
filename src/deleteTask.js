export default async function DeleteTask(props) {
  try {
    let res = await fetch("http://localhost:3010/tasks/" + props.id, {
      method: "DELETE",
    });
    props.update();
    console.log(res.status);
  } catch (err) {
    console.log(err);
  }
}
