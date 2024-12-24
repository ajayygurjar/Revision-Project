import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const clickOnAge = (event) => {
    setEnteredAge(event.target.value);
  };
  const clickOnUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>

        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={clickOnUsername}
        />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={clickOnAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
