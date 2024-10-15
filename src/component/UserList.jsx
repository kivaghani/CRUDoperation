import React from "react";

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn-edit" onClick={() => editUser(user)}>
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default UserList;
