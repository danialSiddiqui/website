import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../Assests/css/style.css';

const Admissions = props => (

  <tr>
  <th scope="row">{props.admission.Regno}</th>
    <td>{props.admission.Name}</td>
    <td>{props.admission.Enail}</td>
    <td>{props.admission.Phone}</td>
    <td>{props.admission.Applyingfor}</td>
    <td>{props.admission.FName}</td>
    <td>{props.admission.FPhone}</td>
    <td><Link to={"/Admission/View/"+props.admission._id}>View </Link></td>

</tr>
)

export default  class Admissionslist extends Component {

  constructor(props) {
    super(props);
    this.state = {admission: []};
  }

componentDidMount() {
    axios.get('http://localhost:5000/Admissions/')
    .then((response) => {
      const admission = response.data;
      console.log(response);
      this.setState({admission: response.data})
    })
      .catch((error) => {
        console.log(error);
      })
  }

  amdmissionList() {
    return this.state.admission.map(currentexercise => {
      return <Admissions admission={currentexercise}  key={currentexercise._id}/>;
    })
  }

  render(){
    return (
      <div className="inter-body">
       <div className="container-fluid">
       <div className="row">
  <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Admissions</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Admission">Admissions</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span >Admissions List</span>
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
               <h3 className="col-10">Admissions</h3>
               <Link className="col-2 btn btn-primary" to="/Admission/Add">Add New Student</Link>
               </div>
               <br />
   
               <table className="table table-striped">
                 <thead>
                   <tr>
                       <th scope="col">Registration Number</th>
                       <th scope="col">Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">Phone</th>
                       <th scope="col">Applying For</th>
                       <th scope="col">Father Name</th>
                       <th scope="col">Father Number</th>
                       <th scope="col">Action</th>
                   </tr>
                 </thead>
               <tbody>
               { this.amdmissionList() }
               
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





