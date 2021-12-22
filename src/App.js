import "./App.css";
import React from "react";
import Sidebar from "./sidebar";
import CreateList from "./taskList";
import NewTask from "./addTask";

class App extends React.Component {
  state = {
    data: [],
    loading: true,
    newData: {
      tag: "Jännä",
      name: "Pelaa",
      time: "2021-12-21",
      status: "pending",
    },
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  getData = async () => {
    try {
      const res = await fetch("http://localhost:3001/tasks");
      const json = await res.json();
      this.setState({ loading: false, data: json });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    if (this.state.loading) {
      return <p>LOADING...</p>;
    } else {
      return (
        <div className="App">
          <div>
            <Sidebar />
            <h1>Main view</h1>
            <p>This is the front page of the app</p>
            <h1>TASK LIST</h1>
            <div className="list-container">
              <CreateList {...this.state.data} />
            </div>
            <button
              className="addButton"
              onClick={() => NewTask(this.state.newData)}
            >
              Add task
            </button>
          </div>
          {console.log(this.state.data)}
        </div>
      );
    }
  }
}

export default App;
