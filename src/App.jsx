import React, { useState } from "react";
import UserForm from "./component/UserForm";
import UserList from "./component/UserList";
import "./styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  // Open popup for delete confirmation
  const openDeletePopup = (id) => {
    setUserIdToDelete(id);
    setShowPopup(true);
  };

  // Close popup without deleting
  const closePopup = () => {
    setShowPopup(false);
    setUserIdToDelete(null);
  };

  // Function to delete a user
  const deleteUser = () => {
    setUsers(users.filter((user) => user.id !== userIdToDelete));
    closePopup();
  };

  // Function to update a user
  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  // Function to handle edit
  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="App">
      <h1>User Management CRUD App</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <UserList
        users={users}
        deleteUser={openDeletePopup}
        editUser={editUser}
      />

      {/* Delete confirmation popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Are you sure you want to delete this user?</h3>
            <div className="popup-buttons">
              <button className="confirm-btn" onClick={deleteUser}>
                Yes
              </button>
              <button className="cancel-btn" onClick={closePopup}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
