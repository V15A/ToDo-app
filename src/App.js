import "./App.css";
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import CreateList from "./taskList";
import Input from "./input";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(0);

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
    setUpdate(update + 1);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  /*
  componentDidUpdate() {
    this.getData();
  }*/
  if (isLoading) {
    return (
      <h1
        style={{
          position: "absolute",
          left: "45%",
          top: "47%",
        }}
      >
        LOADING...
      </h1>
    );
  } else if (window.visualViewport.width < 800) {
    return (
      <div className="App">
        <div>
          <Sidebar />
          <h1>TASK LIST</h1>
          <div>
            <input
              placeholder="Search by name or tag"
              value={search}
              onChange={handleSearch}
            ></input>{" "}
          </div>
          <Input update={toggleUpdate} />
          <ul>
            <CreateList
              {...data}
              search={search}
              status="pending"
              update={toggleUpdate}
            />
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>
          <Sidebar />
          <h1>TASK LIST</h1>
          <div>
            <input
              placeholder="Search by name or tag"
              value={search}
              onChange={handleSearch}
            ></input>{" "}
          </div>
          <Input update={toggleUpdate} />
          <div className="list-container">
            <CreateList
              {...data}
              search={search}
              status="pending"
              update={toggleUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
