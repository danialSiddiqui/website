import React , { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class ViewInQuery extends Component {

  constructor(props) {
    super(props);
    this.state = {persons: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Qurries/'+this.props.match.params.id)
      .then(response => {
        console.log(response);
        this.setState({
          id: response.data._id,
          Name: response.data.Name,
          Number: response.data.Number,
          SchoolName: response.data.SchoolName,
          Section: response.data.Section,
          createdAt: response.data.createdAt.substring(0,10)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })}

  render(){
  return (
       <div className="inter-body">
    <div className="container-fluid">
    <div className="row">
    <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Qurries</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Admission/Queries">Qurries</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span >Qurries View</span>
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
                <h3 className="col-10"> Query Information</h3>
                <Link  className="col-2 btn btn-primary" to={"/Admission/Queries/Edit/"+this.props.match.params.id}>Edit Query</Link>
                </div>
                <hr/>

                <p>Name: {this.state.Name}</p>
                <p>Number: {this.state.Number}</p>

                <p>School: {this.state.SchoolName}</p>
                <p>Section: {this.state.Section}</p>

                <p>Called on: {this.state.createdAt} </p>
                

              </div>
          </div>
      </div>
        
        </div>
      </div>
    </div>

);
  }
}