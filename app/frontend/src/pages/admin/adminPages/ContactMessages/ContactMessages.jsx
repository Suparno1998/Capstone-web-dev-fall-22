import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../utils/axios";

const ContactMessages = () => {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    fetchmessage();
  }, []);

  const fetchmessage = async () => {
    const data = await axios.get("/admin/messages");
    console.log("messages >>>>>", data);
    setMessages(data);
  };

  const deletemessage = async (id) => {
    const result = await axios
      .delete("/admin/message/delete/" + id)
      .then((result) => {
        fetchmessage();
      })
      .catch(() => {
        alert("Could not delete this message");
      });
  };

  return (
    <div className="subscriber-list">
      <h1>Customer Messages</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Messages</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages &&
            messages?.data.map((message) => {
              return (
                <tr>
                  <td>{message._id}</td>
                  <td>{message.email}</td>
                  <td>{message.name}</td>
                  <td>{message.message}</td>
                  <td>{message.createdAt}</td>
                  <td>{message.updatedAt}</td>
                  <td>
                    <Link
                      className="btn btn-danger"
                      to=""
                      onClick={() => deletemessage(message._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages;
