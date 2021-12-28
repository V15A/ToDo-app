import React, { useState, useEffect } from "react";
import EditTask from "./editTask";

function EditForm(props) {
  console.log("FORM" + props);
  this.state = {
    submit: false,
    textInput: "",
    tagInput: "",
    oldData: props,
    newData: { name: props.name, tag: props.tag, date: props.date },
  };

  const checker = () => {
    if (this.state.textInput !== "" && this.state.tagInput !== "") {
      this.setState({ submit: false });
    } else if (this.state.textInput === "" || this.state.tagInput === "") {
      this.setState({ submit: true });
    }
  };

  const handleChange = (event) => {
    this.setState({ textInput: event.target.value });
  };
  const handleTagChange = (event) => {
    this.setState({ tagInput: event.target.value });
  };

  return (
    <div>
      {console.log(this.state.newData)}
      <h4>Modify this task</h4>
      <input
        value={this.state.textInput}
        onChange={handleChange}
        placeholder="Description/name of the task"
      />
      <br />
      <input
        onChange={handleTagChange}
        value={this.state.tagInput}
        placeholder="Give a tag for the task"
      />
      <div /*onClick={handleClick}*/ className="icon">
        <i className="fa fa-play" />
        <button
          id="submitButton"
          onClick={() => EditTask(this.state.oldData, this.state.newData)}
          disabled={this.state.submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditForm;
