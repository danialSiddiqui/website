import React , { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import ava from '../../Assests/images/avatar.jpg';


export default class ViewInQuery extends Component {

  constructor(props) {
    super(props);
    this.state = {admissionfee: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Admissions/'+this.props.match.params.id)
      .then(response => {
        console.log(response);
        this.setState({
          Name : response.data.Name,
          CNIC : response.data.CNIC,
          Regno : response.data.Regno,
          Enail : response.data.Enail,
          Phone : response.data.Phone,
         
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
      <h4 className="mb-0 font-size-18">Admission Fee</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Accounts/AddmissionFee/">Addmision Fee</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span>View</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
      <div className="row">
        <div className="col-4">
          <div className="card">
              <div className="card-body">
                
                <div className="text-center">
                <h4 >Student Info</h4>
              <img className="profile-images" src={ava} alt="" />
              </div>         
              <p>Registion No:{this.state.Regno}</p> 
                <p>Name: {this.state.Name}</p> 
                <p>ID: {this.state.Regno}</p> 
                <p>Email: {this.state.Enail}</p> 
                <p>Phone: {this.state.Phone}</p> 
                </div>
              
          </div>
        </div>
        <div className="col-8">
          <div className="card">
              <div className="card-body">
              <h4 >Admission Fees Details</h4>
              <table className="table table-striped">
            <thead>
            <tr>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Payment Date</th>
            
            
            </tr>
  </thead>
  
  
  <tbody>
  <tr>
    <th scope="row">test</th>
    <td>crc121</td>
    <td>2342</td>
    

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