import "./App.css";
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import CreateList from "./taskList";
// import NewTask from "./addTask";
import Input from "./input";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3010/tasks");
        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [update]);

  const toggleUpdate = () => {
    setUpdate(!update);
    console.log(update);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  /*
  componentDidUpdate() {
    this.getData();
  }*/
  if (isLoading) {
    return <p>LOADING...</p>;
  } else {
    return (
      <div className="App">
        <div>
          <Sidebar />
          <h1>TASK LIST</h1>
          <div>
            <input
              placeholder="Search by name"
              value={search}
              onChange={handleSearch}
            ></input>{" "}
          </div>
          <div className="list-container">
            <CreateList
              {...data}
              search={search}
              status="pending"
              update={toggleUpdate}
            />
          </div>
          <Input update={toggleUpdate} />
        </div>
      </div>
    );
  }
}

export default App;
