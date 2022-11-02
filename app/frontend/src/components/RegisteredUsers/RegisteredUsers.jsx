
import React, { Fragment, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"
import "./RegisteredUsers.css";

function RegisteredUsers(){
    
    return(
        <div className="register-user-list">
            <h1>Registered Users</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mark@mdo.com</td>
                        <td>Active</td>
                        <td><a className="btn btn-danger">De Activate</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>jacob@fat.com</td>
                        <td>De-Active</td>
                        <td><a className="btn btn-primary">Activate</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>larry@twitter.com</td>
                        <td>Active</td>
                        <td><a className="btn btn-danger">De Activate</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RegisteredUsers;