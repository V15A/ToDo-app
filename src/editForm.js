import React from "react";
import EditTask from "./editTask";

/*
function EditButton(props) {
  console.log(props);

  return <button onClick={new EditForm(props)}></button>;
}*/

class EditForm extends React.Component {
  constructor(props) {
    console.log(props.update);
    super(props);
    this.state = {
      renderEdit: false,
      submit: true,
      parentUpdater: props.update,
      textInput: props.name,
      tagInput: props.tag,
      oldData: props,
      newData: { name: props.name, tag: props.tag, time: props.date },
    };
  }

  checker = () => {
    if (this.state.textInput !== "" && this.state.tagInput !== "") {
      this.setState({ submit: false });
    } else if (this.state.textInput === "" || this.state.tagInput === "") {
      this.setState({ submit: true });
    }
  };

  handleChange = (event) => {
    this.setState({ textInput: event.target.value });
    this.setState((prevState) => ({
      newData: { ...prevState.newData, name: event.target.value },
    }));
    this.checker();
  };
  handleTagChange = (event) => {
    this.setState({ tagInput: event.target.value });
    this.setState((prevState) => ({
      newData: { ...prevState.newData, tag: event.target.value },
    }));
    this.checker();
  };

  toggleButton = () => {
    this.setState({ renderEdit: !this.state.renderEdit });
  };

  handleClick = (event) => {
    EditTask(this.state.oldData, this.state.newData);
    this.toggleButton();
    setTimeout(() => {}, 100);
    this.checker();
    this.state.parentUpdater();
  };

  render() {
    if (this.state.renderEdit) {
      return (
        <div>
          {console.log(this.state.newData)}
          <h4 style={{ margin: 0 }}>Modify this task</h4>
          <input
            value={this.state.textInput}
            onChange={this.handleChange}
            placeholder={this.state.textInput}
          />
          <br />
          <input
            onChange={this.handleTagChange}
            value={this.state.tagInput}
            placeholder="Give a tag for the task"
          />
          <div /*onClick={handleClick}*/ className="icon">
            <i className="fa fa-play" />
            <button onClick={() => this.toggleButton()}>Cancel</button>{" "}
            <button
              id="submitButton"
              onClick={this.handleClick}
              disabled={this.state.submit}
            >
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return <button onClick={() => this.toggleButton()}>Edit</button>;
    }
  }
}
export default EditForm;
