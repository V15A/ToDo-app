import React, { useState, useEffect } from "react";
import NewTask from "./addTask";

const Input = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {});

  const [tagInput, setTagInput] = useState("");
  useEffect(() => {
    if (textInput !== "" && tagInput !== "") {
      setIsDisabled(false);
    } else if (textInput === "" || tagInput === "") {
      setIsDisabled(true);
    }
  }, [textInput, tagInput]);

  function getDate() {
    let time = new Date();
    let date =
      time.getFullYear() +
      "-" +
      (time.getMonth() + 1) +
      "-" +
      time.getDate() +
      " " +
      time.getHours() +
      ":" +
      time.getMinutes() +
      ":" +
      time.getSeconds();
    return date;
  }

  const handleClick = () => {
    console.log(textInput);
    console.log(tagInput);
    /*
    if (textInput.length < 2) {
      alert(
        "Please give a valid name for the task. Name must contain 2 characters or more."
      );
    } else if (tagInput.length < 1) {
      alert(
        "Please give a valid tag for the task. Tag must contain 1 or more characters."
      );
    } else {}*/

    NewTask({
      name: textInput,
      tag: tagInput,
      time: getDate(),
      status: "pending",
    });
    clearInputs();
    alert("New task successfully added!");
    props.update();
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleTagChange = (event) => {
    setTagInput(event.target.value);
  };

  const clearInputs = () => {
    setTextInput("");
    setTagInput("");
  };

  return (
    <div>
      <input
        value={textInput}
        onChange={handleChange}
        placeholder="Description/name of the task"
      />
      <br />
      <input
        onChange={handleTagChange}
        value={tagInput}
        placeholder="Give a tag for the task"
      />
      <div onClick={handleClick} className="icon">
        <i className="fa fa-play" />
        <button id="submitButton" disabled={isDisabled}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default Input;
