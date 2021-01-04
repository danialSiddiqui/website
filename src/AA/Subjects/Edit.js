import React,{ Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default class AddInquery extends Component {
  

  render(){
  return (

    <div className="inter-body">
    <div className="container-fluid">
    <div className="row">
    <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Edit</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="">Edit</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span > Edit</span>
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
                
                  <h3>New Query</h3>
                  <p>You can crete a brand new Query by Filling the following details.</p>

                  <hr />

            
                
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>


 );
}
}

