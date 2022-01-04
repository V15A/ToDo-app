import Sidebar from "../sidebar";
import CreateList from "../taskList";
import React, { useState, useEffect } from "react";

export default function History() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  if (isLoading) {
    return (
      <h1 style={{ position: "absolute", left: "50%", top: "50%" }}>
        LOADING...
      </h1>
    );
  } else if (window.visualViewport.width < 800) {
    return (
      <main className="history">
        <Sidebar />
        <h1>Archive</h1>
        <div>
          <div>
            {" "}
            <input
              placeholder="Search by name or tag"
              value={search}
              onChange={handleSearch}
            ></input>{" "}
          </div>
          <ul>
            <CreateList
              {...data}
              search={search}
              status="done"
              update={"toggleUpdate"}
            />
          </ul>
        </div>
      </main>
    );
  } else {
    return (
      <main className="history">
        <Sidebar />
        <h1>Archive</h1>
        <div>
          <div>
            {" "}
            <input
              placeholder="Search by name or tag"
              value={search}
              onChange={handleSearch}
            ></input>{" "}
          </div>
          <div className="list-container">
            <CreateList
              {...data}
              search={search}
              status="done"
              update={"toggleUpdate"}
            />
          </div>
        </div>
      </main>
    );
  }
}
