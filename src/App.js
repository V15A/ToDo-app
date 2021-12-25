import "./App.css";
import React from "react";
import Sidebar from "./sidebar";
import CreateList from "./taskList";
// import NewTask from "./addTask";
import Input from "./input";

class App extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.getData();
  }
  /*
  componentDidUpdate() {
    this.getData();
  }*/

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
            <h1>TASK LIST</h1>
            <div className="list-container">
              <CreateList {...this.state.data} />
            </div>
            <Input />
          </div>
          {console.log(this.state.data)}
        </div>
      );
    }
  }
}

export default App;
