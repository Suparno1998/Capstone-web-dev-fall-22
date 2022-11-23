import React from "react";
import "../AdminOrders/AdminOrders.css";

const AdminOrders = () => {
  return (
    <div className="subscriber-list">
      <h1>Customer's Orders</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th scope="col">DATE</th>
            <th scope="col">TOTAL</th>
            <th scope="col">PAID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3678726386854</td>
            <td>2022/12/11</td>
            <td>3455</td>
            <td>True</td>
            <td>
              <a className="btn btn-primary" href="#">
                Detail
              </a>
            </td>
          </tr>
          <tr>
            <td>47097490fj34ur89</td>
            <td>2022/11/11</td>
            <td>3434</td>
            <td>False</td>
            <td>
              <a className="btn btn-primary" href="#">
                Detail
              </a>
            </td>
          </tr>
          <tr>
            <td>jksdhf82yy4382hiir2</td>
            <td>2022/11/01</td>
            <td>600</td>
            <td>True</td>
            <td>
              <a className="btn btn-primary" href="#">
                Detail
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
