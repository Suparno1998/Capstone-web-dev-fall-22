import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../../../../../../routes/axios";

const ContactMessages = () => {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const fetchmessage = async () => {
      const data = await axios.get("/admin/messages");
      console.log("messages >>>>>", data);
      setMessages(data);
    };
    fetchmessage();
  }, []);

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

export default ContactMessages;
