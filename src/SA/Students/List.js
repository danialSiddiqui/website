import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

 
export default  class Inquerylist extends Component {
  
  render(){
  return (
   <div className="inter-body">
    <div className="container-fluid">
    <div className="row">
  <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">List</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="">List</Link>
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
            <Link class="col-2 btn btn-primary" to="">Add </Link>
            </div>
            <br />

            

            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

}








