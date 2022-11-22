import React, { useState, useEffect } from "react";
import axios from "../../../../../../routes/axios";

const ListOfUsers = () => {
  const [listofusers, setListOfUsers] = useState("");

  useEffect(() => {
    const fetchlistofusers = async () => {
      const data = await axios.get("/admin/users-list");
      console.log("list of Users >>>>>", data);
      setListOfUsers(data);
    };
    fetchlistofusers();
  }, []);

  return (
    <div className="subscriber-list">
      <h1>List of Registered Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listofusers &&
            listofusers?.data.map((listofuser) => {
              return (
                <tr>
                  <td>{listofuser._id}</td>
                  <td>{listofuser.email}</td>
                  <td>{listofuser.name}</td>
                  <td>
                    <a className="btn btn-danger" href="#">
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfUsers;
