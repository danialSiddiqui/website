import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

 
export default  class Admissionfeelist extends Component {
  
  render(){
  return (
   <div className="inter-body">
    <div className="container-fluid">
    <div className="row">
  <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Admission Fee</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Accounts/AddmissionFee/">Addmision Fee</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span > List</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
            <div className="row">
            <h3 className="col-10">List</h3>
         {/**    <Link class="col-2 btn btn-primary" to="">Add </Link> **/}
            </div>
            <br />
            
						<table className="table table-striped">
            <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Registration No</th>
            <th scope="col">ID</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Comments</th>
            <th scope="col">Action</th>
            </tr>
  </thead>
  
  
  <tbody>
  <tr>
    <th scope="row">test</th>
    <td>crc121</td>
    <td>2342</td>
    <td>033227131</td>
    <td>12000</td>
    <td>11</td>
    <td>fd</td>
    <td><Link to="/Accounts/AddmissionFee/View/:id">View</Link></td>
  </tr>
  
  </tbody>
</table>
            

            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

}








