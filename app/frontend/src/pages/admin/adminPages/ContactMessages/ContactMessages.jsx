import React from "react";
import { useEffect } from "react";
import axios from "../../../../../../routes/axios";

const ContactMessages = () => {
  useEffect(() => {
    const fetchmessage = async () => {
      const message = await axios.get("/message/get");
      console.log("messages >>>>>", message);
    };
    fetchmessage();
  }, []);

  return (
    <div className="subscriber-list">
      <h1>Messages from the User</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sn. No</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Messages</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Updated At</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>test@test.com</td>
            <td>Test</td>
            <td>Test</td>
            <td>2022-11-02T13:47:55.048+00:00</td>
            <td>2022-11-02T13:47:55.048+00:00</td>
            <td>
              <a className="btn btn-danger"> Delete </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Rupesh@test.com</td>
            <td>Rupesh Gautam</td>
            <td>How can I contact you?</td>
            <td>2022-11-02T13:47:55.048+00:00</td>
            <td>2022-11-02T13:47:55.048+00:00</td>
            <td>
              <a className="btn btn-danger"> Delete </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>test@test.com</td>
            <td>Test</td>
            <td>Test</td>
            <td>2022-11-02T13:47:55.048+00:00</td>
            <td>2022-11-02T13:47:55.048+00:00</td>
            <td>
              <a className="btn btn-danger"> Delete </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages;
