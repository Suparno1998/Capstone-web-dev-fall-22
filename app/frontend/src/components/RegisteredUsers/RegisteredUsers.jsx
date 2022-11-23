import React, { useEffect, useState } from "react";
import axios from "../../../../routes/axios";
import { Form, Button, Alert } from "react-bootstrap"
import "./RegisteredUsers.css";

function RegisteredUsers() {
  const [userList, setUserList] = useState("");

  useEffect(() => {
    const fetchusers = async () => {
      const data = await axios.get("/admin/users-list");
      console.log(">>>>>>>>>>>>>>>>")
      setUserList(data);
    };
    fetchusers();
  }, []);

  const handleClick = async (e,id,status)=>{
    e.preventDefault()
    //alert("clicked ID  "+id+" Status is "+status)
    const userObject = {
        id : id,
        status : status
    }
    console.log(userObject)
    if(userObject){
        //alert(userObject)
            const data = await axios.get(`/admin/update-user-status?id=${id}&status=${status}`)

            if(data){
                alert("User details updated");
                setUserList( data);
                
            }
            else{
                alert("Not updated")
            }
            
        }
    else{
        alert("no data");
    }
  }
  return (
    <div className="register-user-list">
      <h1>Registered Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {userLists &&
            userLists?.map((u) => {
              return (
                <tr>
                  <td>{u._id}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              );
            })} */}
            {userList &&
            userList?.data.map((userList) => {
              return (
                <tr>
                  <td>{userList._id}</td>
                  <td>{userList.email}</td>
                  <td>{userList.role}</td>
                  <td>{userList.status}</td>
                  <td>
                    {userList.status === 1 ? (<button onClick={event => handleClick(event, userList._id, userList.status)}>
                    DeActivate
                    </button>) : (<button className="activate" onClick={event => handleClick(event, userList._id, userList.status)}>
                    Activate
                    </button>)}
                    
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default RegisteredUsers;
