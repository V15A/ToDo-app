import Sidebar from "../sidebar";

export default function Info() {
  return (
    <main className="info">
      <Sidebar />
      <h1>Author: Visa Keskinen</h1>
      <h2>Created using React framework</h2>
      <p>
        Search and two input fields for adding tasks are described as needed on
        the task list view.
      </p>
      <p>
        To add the task click the add task button after adding related
        information.
      </p>
      <p>
        Rearrange the tasks with the up and down buttons. Delete deletes the
        task immediately and done marks it done.
      </p>
      <p>
        Edit brings up an edit view. Change anything in the two fields and push
        submit to submit changes.
      </p>
    </main>
  );
}
