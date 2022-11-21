import React, { useEffect, useState } from "react";
import axios from "../../../../routes/axios";
import "./RegisteredUsers.css";

function RegisteredUsers() {
  const [userLists, setUserLists] = useState("");

  useEffect(() => {
    const fetchusers = async () => {
      const data = await axios.get("/admin/users-list");
      console.log("userlist >>>>>", data);
      setUserLists(data);
    };
    fetchusers();
  }, []);

  return (
    <div className="register-user-list">
      <h1>Registered Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {userLists &&
            userLists?.map((u) => {
              return (
                <tr>
                  <td>{u._id}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default RegisteredUsers;
