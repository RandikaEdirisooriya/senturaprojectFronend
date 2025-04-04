import React, { useState } from "react";
import { createUser } from "../api/weavyApi";

const UserForm: React.FC = () => {
  const [user, setUser] = useState({ uid: "", name: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(user);
      alert("User created!");
      setUser({ uid: "", name: "" });
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Create New User</h2>
      <input
        type="text"
        placeholder="UID"
        value={user.uid}
        onChange={(e) => setUser({ ...user, uid: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default UserForm;
