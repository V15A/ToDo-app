import Sidemenu from "../sidemenu";

export default function Page2() {
  return (
    <main className="left">
      <Sidemenu />
      <h1>Second view</h1>
      <p>Everything (except nav bar) on this page is left aligned.</p>
      <h1>LEFT</h1>
    </main>
  );
}
