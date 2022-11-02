
import React, { Fragment, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"
import "./NewsletterSubscribers.css";

function NewsletterSubscribers(){

    return(
        <div className="subscriber-list">
            <h1>List of Subscribers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mark@mdo.com</td>
                        <td><a className ="btn btn-primary">Send Newsletter</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>jacob@fat.com</td>
                        <td><a className ="btn btn-primary">Send Newsletter</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>larry@twitter.com</td>
                        <td><a className ="btn btn-primary">Send Newsletter</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NewsletterSubscribers;
