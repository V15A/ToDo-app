export default async function FetchData() {
  const res = await fetch("../tasks");
  const json = await res.json();
  console.log(json);
  return json;
}
