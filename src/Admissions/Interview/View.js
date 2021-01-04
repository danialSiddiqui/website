import React, { Component }   from "react";
import { Link } from "react-router-dom";
import "../Assests/css/style.css"
import axios from 'axios';


export default class InterviewDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {persons: []};
	  }
	
	  componentDidMount() {
		axios.get('http://localhost:5000/Interview/'+this.props.match.params.id)
		  .then(response => {
			console.log(response);
			this.setState({
			  id: response.data._id,
			  RegNum: response.data.RegNum,
			  Name: response.data.Name,
			  Interviewee: response.data.Interviewee,
			  date: response.data.date,
			  Time: response.data.Time,
			  createdAt: response.data.createdAt.substring(0,10)
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })}


	render(){
  return (
  	<div class="inter-body">
		<div class="container-fluid">
		<div className="row">
  <div className="col-12">
    <div className="page-title-box d-flex align-items-center justify-content-between">
      <h4 className="mb-0 font-size-18">Interview</h4>
      <div className="page-title-right">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link to="/Admission/Interview">Interview</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              <span >Interview View</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
			<div class="row">
				<div class="col-12">
					<div class="card">
						<div class="card-body">
						<div class="row">
						<h3 class="col-6">Interview details</h3>
						<p className="col-3">	<Link  class=" btn btn-primary" to={"/Admission/Interview/Edit/"+this.state.id}>Edit Interview</Link> </p>
						
						<p className="col-3">	<Link className=" btn btn-primary" to={"/Admission/Interview/Reshedule/"+this.state.id}>Reschedule Interview</Link> </p>
   					
						</div>
						<hr/>
						<p>Name : {this.state.Name}</p>
						<p>Registrion Number : {this.state.RegNum}</p>
						<p>Contact Number:{this.state.Name}</p>
						<p>Date: {this.state.date}</p>
						<p>Time: {this.state.Time}</p>
						<p>Interviewee: {this.state.Interviewee}</p>
						<div class="row">
						<p class="col-4 btn btn-primary space">Add Comments</p>
						<p class="col-4 btn btn-primary space">Update Status</p>
						</div>
						</div>
					</div>
				</div>   
			</div>
		</div>
	</div>
  	);
}
}

