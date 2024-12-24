import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [userData, setUserData] = useState([]);
  const onDataRetrival = (data) => {
    setUserData((prevUserData) => {
      return [...prevUserData, data];
    });
  };
  return (
    <div>
      <AddUser onDataRetrival={onDataRetrival} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
