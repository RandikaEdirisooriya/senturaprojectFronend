import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Weavy User Manager</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
