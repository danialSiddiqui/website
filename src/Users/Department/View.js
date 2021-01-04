import React, { Component } from "react";
import "../../Assests/css/user.css";
import { Link } from "react-router-dom";
import axios from "axios";






export default class Deplist extends Component {

	constructor(props) {
		super(props);
		this.state = {persons: []};
	  }
	
	  componentDidMount() {
		axios.get('http://localhost:5000/Department/'+this.props.match.params.id)
		  .then(response => {
			console.log(response);
			this.setState({
			  id: response.data._id,
			  DepName: response.data.DepName,
			  
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
				  <Link to="/Departments/">Department</Link>
				</li>
				<li className="active breadcrumb-item" aria-current="page">
				  <span >Department View</span>
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
							<h3 class="col-9">Department details</h3>
							<p className="col-3">	<Link  class=" btn btn-primary" to={"/Departments/Edit/"+this.state.id}>Edit Deparmtent</Link> </p>
							
							
						   
							</div>
							<hr/>
							<p>Name : {this.state.DepName}</p>
							
							
							</div>
						</div>
					</div>   
				</div>
			</div>
		</div>
		   );
		 }
		 
	}








