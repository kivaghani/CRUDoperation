// src/components/UserForm.js
import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [user, setUser] = useState({ id: null, name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ id: null, name: "", email: "" });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      if (editingUser) {
        updateUser(user);
      } else {
        addUser(user);
      }
      setUser({ id: null, name: "", email: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button onClick={handleSubmit} type="submit">
        {editingUser ? "Update" : "Add"} User
      </button>
    </form>
  );
};

export default UserForm;
