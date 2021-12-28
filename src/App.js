import "./App.css";
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import CreateList from "./taskList";
// import NewTask from "./addTask";
import Input from "./input";

function App() {
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
  }, [isLoading]);
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
          <div className="list-container">
            <CreateList {...data} />
          </div>
          <Input />
        </div>
        {console.log(data)}
      </div>
    );
  }
}

export default App;
