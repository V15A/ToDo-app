export default async function DeleteTask(props) {
  console.log(props);
  try {
    let res = await fetch("http://localhost:3010/tasks/" + props.id, {
      method: "DELETE",
    });
    props.update();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
