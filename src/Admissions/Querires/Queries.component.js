import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Assests/css/my-style.css';



const Qurries = props => (
  <tr>
    <th scope="row">1</th>
    <td>{props.persons.Name}</td>
    <td>{props.persons.Number}</td>
    <td>{props.persons.SchoolName}</td>
    <td>{props.persons.createdAt.substring(0,10)}</td>
    <td>{props.persons.Section}</td>
    <td>
      <Link to={"/Admission/Queries/View/"+props.persons._id}>View</Link>
    </td>
  </tr>
)

 
export default  class Inquerylist extends Component {
  
constructor(props) {
    super(props);
    this.state = {persons: []};
  }


componentDidMount() {
    axios.get('http://localhost:5000/Qurries/')
    .then((response) => {
      const persons = response.data;
      console.log(response);
      this.setState({persons: response.data})
    })
      .catch((error) => {
        console.log(error);
      })
  }

  exerciseList() {
    return this.state.persons.map(currentexercise => {
      return <Qurries persons={currentexercise}  key={currentexercise._id}/>;
    })
  }
  

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
              <span >Qurries List</span>
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
            <h3 className="col-10">Querires</h3>
            <Link class="col-2 btn btn-primary" to="/Admission/Queries/Add">Add New Query</Link>
            </div>
            <br />

            <table className="table table-striped">
              <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Number</th>
                    <th scope="col">School</th>
                    <th scope="col">Called On</th>
                    <th scope="col">Section</th>
                    <th scope="col">Action</th>
                </tr>
              </thead>
            <tbody>
            { this.exerciseList() }
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








